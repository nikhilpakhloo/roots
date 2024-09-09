import PostThreads from "@/components/forms/PostThreads";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

async function CreateThread() {
  const user = await currentUser();
  if(!user) return null;
  const userInfo = await fetchUser(user.id);
  if(!userInfo?.onboarded) redirect('/onboarding')

  return (
    <>
    <h1 className='head-text'>Create Thread</h1>

    <PostThreads userId = {userInfo._id}/>
    </>
  )
}

export default CreateThread
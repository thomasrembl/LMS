import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      This is a protected page
      <UserButton 
      afterSignOutUrl="/"/>
    </div>

  )
}

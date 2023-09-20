import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
        Landing Page (Unprotected)
        <div>
            <Link href='/login'>
                <Button>Login</Button>
            </Link>
            <Link href='/register'>
                <Button>Register</Button>
            </Link>
        </div>
    </div>
  );  
}

export default LandingPage;
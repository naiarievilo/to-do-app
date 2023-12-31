import { PropTypes } from "prop-types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card.jsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/ui/tabs.jsx"
import { cn } from "@/lib/utils.js";

import { LogInForm } from "./login-form.jsx";
import { SignUpForm } from "./signup-form.jsx";

export function AuthnPanel({ className }) {
  return (
    <Tabs
      defaultValue="login"
      className={cn(
        "w-[320px] 2xl:w-[400px]",
        className
      )}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login" className="rounded-l-md">Log In</TabsTrigger>
        <TabsTrigger value="signup" className="rounded-r-md">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card className="flex flex-col justify-center px-4 pt-2 pb-8">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-800 mb-1">Log in to TODO</CardTitle>
            <CardDescription className="text-lg text-slate-700/90">
              Get back to planning!
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4">
            <LogInForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="flex flex-col justify-center px-4 pt-2 pb-8">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-800 mb-1">Sign up to TODO</CardTitle>
            <CardDescription className="text-lg text-slate-700/90">
              Sign up and start planning your life!
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4">
            <SignUpForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
AuthnPanel.propTypes = {
  className: PropTypes.string
};

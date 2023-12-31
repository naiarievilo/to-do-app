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
        "w-[400px]",
        className
      )}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login" className="rounded-l-md">Log In</TabsTrigger>
        <TabsTrigger value="signup" className="rounded-r-md">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card className="flex flex-col justify-center px-8">
          <CardHeader>
            <CardTitle className="text-3xl">Log in to TODO</CardTitle>
            <CardDescription className="text-md">
              Get back to planning!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <LogInForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign up to TODO</CardTitle>
            <CardDescription>
              Sign up and start planning your life!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
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

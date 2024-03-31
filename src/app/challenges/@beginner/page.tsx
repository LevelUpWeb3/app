import { Button } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../../components/Card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../../../components/Tabs";
import CodeEditor from "@/components/ide/CodeEditor";
import CodeSnippet from "@/components/ide/CodeSnippet";

export default function ChallengesPage() {
  return (
    <Tabs
      defaultValue="account"
      className="w-[400px]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
            <CodeEditor />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
            <CodeSnippet />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

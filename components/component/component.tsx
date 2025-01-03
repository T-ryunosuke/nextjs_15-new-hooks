import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white dark:bg-gray-800 shadow-md px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <LogInIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-primary">Acme Social</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search..."
              className="pr-10 rounded-full"
            />
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="relative" prefetch={false}>
              <BellIcon className="h-6 w-6 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                3
              </span>
            </Link>
            <Link href="#" className="relative" prefetch={false}>
              <MailIcon className="h-6 w-6 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                2
              </span>
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <span className="hidden md:block text-muted-foreground">
                John Doe
              </span>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-6 p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-muted-foreground">@johndoe</p>
            </div>
          </div>
          <nav className="space-y-2">
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <CompassIcon className="h-5 w-5" />
              <span>Explore</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <BookmarkIcon className="h-5 w-5" />
              <span>Bookmarks</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <MessageCircleIcon className="h-5 w-5" />
              <span>Messages</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <HeartIcon className="h-5 w-5" />
              <span>Likes</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <Input
              type="text"
              placeholder="What's on your mind?"
              className="flex-1 rounded-full bg-muted px-4 py-2"
            />
            <Button variant="ghost" size="icon">
              <SendIcon className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Tweet</span>
            </Button>
          </div>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Jane Doe</h3>
                  <p className="text-muted-foreground">@janedoe</p>
                </div>
              </div>
              <div className="space-y-2">
                <p>
                  Excited to share my latest project with you all! Check it out
                  and let me know what you think.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2Icon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ClockIcon className="h-5 w-5" />
                  <span>2h</span>
                </div>
              </div>
              <div className="mt-4 border-t pt-4 space-y-2">
                <div className="flex items-center gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground">Great work!</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-muted-foreground">Looks amazing!</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">John Smith</h3>
                  <p className="text-muted-foreground">@johnsmith</p>
                </div>
              </div>
              <div className="space-y-2">
                <p>
                  Enjoying the beautiful weather today! Who&apos;s up for a hike
                  later?
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2Icon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ClockIcon className="h-5 w-5" />
                  <span>1h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Trending Topics</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center justify-between text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <span>#technology</span>
                <span className="bg-muted px-2 py-1 rounded-full text-xs">
                  12.3K
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <span>#travel</span>
                <span className="bg-muted px-2 py-1 rounded-full text-xs">
                  8.7K
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <span>#fashion</span>
                <span className="bg-muted px-2 py-1 rounded-full text-xs">
                  6.2K
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <span>#food</span>
                <span className="bg-muted px-2 py-1 rounded-full text-xs">
                  9.5K
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Share2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

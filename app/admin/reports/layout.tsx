import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports | YuvaSpark Admin",
  description: "View and analyze various reports and analytics for your school",
};

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            View and analyze various reports and analytics for your school
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

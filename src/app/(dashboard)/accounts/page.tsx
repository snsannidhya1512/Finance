"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useNewAccount } from "../../../../features/accounts/hooks/use-new-account";
import { Payment, columns } from "./columns";
import { DataTable } from "@/components/data-table";

const AccountsPage = () => {
  const newAccount = useNewAccount();

  const data: Payment[] = [
    {
      id: "72ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },

    {
      id: "72ed53f",
      amount: 400,
      status: "success",
      email: "a@example.com",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts page</CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="email"
            columns={columns}
            data={data}
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;

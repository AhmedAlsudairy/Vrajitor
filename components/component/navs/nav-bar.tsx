import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost">Freelancers</Button>
          <Button variant="ghost">Services</Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-4">
              <Button variant="ghost">Freelancers</Button>
              <Button variant="ghost">Services</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
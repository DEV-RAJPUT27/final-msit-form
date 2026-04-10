/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ApplicantDetailsProps {
  formData: {
    name: string;
    fatherName: string;
    motherName: string;
    dob: string;
    address: string;
    contact: string;
    email: string;
    category: string;
    categoryCertificate: string;
    region: string;
  };
  handleFormDataChange: (field: string, value: any) => void;
  nextTab: () => void;
  prevTab: () => void;
}

const ApplicantDetails: React.FC<ApplicantDetailsProps> = ({
  formData,
  handleFormDataChange,
  nextTab,
  prevTab
}) => {
  return (
    <TabsContent value="personal" className="px-6 pb-6">
      <Card>
        <CardHeader>
          <CardTitle>Applicant Details</CardTitle>
          <CardDescription>Please provide your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{`Candidate's Name (in CAPITAL) *`}</Label>
              <Input
                id="name"
                name="entry.1792349567"
                placeholder="FULL NAME"
                value={formData.name}
                onChange={(e) => handleFormDataChange("name", e.target.value.toUpperCase())}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth *</Label>
              <Input
                id="dob"
                type="date"
                name="entry.1198503536"
                value={formData.dob}
                onChange={(e) => handleFormDataChange("dob", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="father-name">{`Father's Name *`}</Label>
              <Input
                id="father-name"
                name="entry.1621517083"
                placeholder="Father's full name"
                value={formData.fatherName}
                onChange={(e) => handleFormDataChange("fatherName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mother-name">{`Mother's Name *`}</Label>
              <Input
                id="mother-name"
                name="entry.456456789"
                placeholder="Mother's full name"
                value={formData.motherName}
                onChange={(e) => handleFormDataChange("motherName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Complete Postal Address with PIN Code *</Label>
            <Textarea
              id="address"
              name="entry.252016256"
              placeholder="Enter your full address"
              className="min-h-[100px]"
              value={formData.address}
              onChange={(e) => handleFormDataChange("address", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="contact">Mobile Number *</Label>
              <Input
                id="contact"
                type="tel"
                name="entry.123098456"
                placeholder="10-digit mobile number"
                value={formData.contact}
                onChange={(e) => handleFormDataChange("contact", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                name="entry.903934289"
                placeholder="your-email@example.com"
                value={formData.email}
                onChange={(e) => handleFormDataChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Category *</Label>
              <Select
                name="entry.298926644"
                value={formData.category}
                onValueChange={(value: any) => handleFormDataChange("category", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SC">SC</SelectItem>
                  <SelectItem value="ST">ST</SelectItem>
                  <SelectItem value="Defence">Defence</SelectItem>
                  <SelectItem value="PWD">PWD</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category-certificate">Category Certificate Link (if applicable)</Label>
              <Input
                id="category-certificate"
                name="entry.456789012"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.categoryCertificate}
                onChange={(e) => handleFormDataChange("categoryCertificate", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="pb-1">Whether the Candidate Belongs to Delhi Region/Outside Delhi Region *</Label>
            <RadioGroup
              name="entry.2034615307"
              className="flex space-x-4"
              value={formData.region}
              onValueChange={(value) => handleFormDataChange("region", value)}
              required
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Delhi" id="delhi" />
                <Label htmlFor="delhi">Delhi Region</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Outside Delhi" id="outside-delhi" />
                <Label htmlFor="outside-delhi">Outside Delhi</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevTab} className="flex items-center gap-2 cursor-pointer">
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <Button type="button" onClick={nextTab} className="flex items-center gap-2 cursor-pointer">
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default ApplicantDetails;
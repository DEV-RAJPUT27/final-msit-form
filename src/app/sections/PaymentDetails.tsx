/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaymentDetailsProps {
  formData: {
    paymentProofLink: string;
  };
  handleFormDataChange: (field: string, value: any) => void;
  nextTab: () => void;
  prevTab: () => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ 
  formData,
  handleFormDataChange,
  nextTab,
  prevTab 
}) => {
  return (
    <TabsContent value="payment" className="px-6 pb-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>Please provide payment information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-4">Payment Instructions</h3>
            <p className="mb-4">
              Deposit Rs. 2500/- as registration charges and processing fees (Non-Refundable) to MSIT
              through NEFT/RTGS.
            </p>

            <div className="space-y-2 text-blue-700">
              <p><strong>Bank Account Details:</strong></p>
              <p>Account Name: Maharaja Surajmal Institute of Technology</p>
              <p>Account Number: 175901000001658</p>
              <p>IFSC Code: IOBA0001759</p>
              <p>Bank & Branch: Indian Overseas Bank , C-4, Janakpuri, New Delhi-110058</p>
            </div>

            <p className="mt-4 text-blue-900">
              After making the payment, please take a screenshot of the payment confirmation and upload it.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment-proof">Payment Proof (Screenshot/Receipt) *</Label>
            <Input
              id="payment-proof"
              name="entry.1345269852"
              placeholder="Drive link (set access to 'anyone with the link')"
              value={formData.paymentProofLink}
              onChange={(e) => handleFormDataChange("paymentProofLink", e.target.value)}
              required
            />
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

export default PaymentDetails;
import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Send } from "lucide-react";

interface FinalSubmissionProps {
  prevTab: () => void;
  handleSubmit: () => void;
}

const FinalSubmission: React.FC<FinalSubmissionProps> = ({
  prevTab,
  handleSubmit
}) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <TabsContent value="submission" className="px-6 pb-6">
      <Card>
        <CardHeader>
          <CardTitle>Final Submission</CardTitle>
          <CardDescription>Declaration and submission of the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-amber-700 text-sm font-medium text-justify">
              I understand that by merely submitting application form under management quota does not entitle/gurantee me the admission in Maharaja Surajmal Institute of Technology and if admission is granted then I hereby solemnly affirm and declare that I fulfill the eligibility conditions prescribed by the GGSIP University and my admission would be provisional and subject to final ratification by the GGSIPU on verification. I have also read the Admission Brochure of GGSIPU for 2026-2027 and understood allocation and reservation of seats and manner of admission. I have carefully read and verified the information furnished by my son/daughter/ward and affirm that it is true and correct and He/She fulfills the eligibility conditions as mentioned in the Admission Bulletin / Rules of GGSIPU.
            </p>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6 text-justify">
            <h4 className="text-amber-800 font-semibold mb-2">INSTRUCTIONS</h4>
            <p className="text-amber-700 text-sm font-medium mb-3">
              Candidates should annex the following set of Xerox Copy with this form while depositing at Maharaja Surajmal Institute of Technology for compilation of documents. Original documents will be required during Counselling.<br /> All the drive links given should have public access. Incomplete form will be summarily rejected during scrutiny:
            </p>

            <ol className="list-decimal text-amber-700 text-sm font-medium pl-5 space-y-1">
              <li>Filled MQ Form</li>
              <li>Duly Submitted Filled Up Online Registration Form of GGSIPU in the portal for relevant programme.</li>
              <li>Photo</li>
              <li>Signature</li>
              <li>Parent&apos;s Sign</li>
              <li>Admit Card and Rank Proof.</li>
              <li>10th Marksheet and Passing Certificate.</li>
              <li>12th Marksheet and Passing Certificate.</li>
              <li>Diploma Marksheet of all semester examinations and Passing Certificate (for Lateral Entry).</li>
              <li>Caste/Category Certificate, if belongs to reverse category/reserved seat.</li>
              <li>Gap Year Certificate (If any).</li>
              <li>Copy of Adhaar Card.</li>
              <li>Proof of Payment of registration / Processing Fee of RS 2500/- only.</li>
            </ol>

            <p className="font-bold text-amber-700 text-sm space-y-1 pt-3">Before submitting the form , please make a pdf file ({"<"}10MB) including all above mentioned documents in the given order. This pdf is different from the one you have downloaded on the previous tab.
              <br />Merge the two PDFs and upload the merged PDF <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLcJBKtJNBcr9p6hrULYqfrbp15Pew-mZlf9a5ubLcS7XBtQ/viewform" className="font-bold text-blue-600 hover:underline cursor-pointer">here</a>. The PDF file name must be candidate$apos;s GGSIPU Registration number. This is a required step to make your submission valid and counted.</p>
          </div>

          <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4 bg-card">
            <Checkbox
              id="agree-checkbox"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(!!checked)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="agree-checkbox"
                className="text-sm font-medium leading-normal cursor-pointer select-none"
              >
                I hereby declare that all the information filled in this application form is true, correct, and complete. I have downloaded the generated PDF, reviewed it, and verified all details are correct.
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevTab} className="flex items-center gap-2 cursor-pointer">
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <Button
            type="submit"
            disabled={!agreed}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2 cursor-pointer"
          >
            <Send className="h-4 w-4" /> Submit Application
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default FinalSubmission;

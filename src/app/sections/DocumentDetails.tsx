/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocumentDetailsProps {
  formData: {
    photoLink: string;
    admitCardLink: string;
    ipuFormLink: string;
    candidateSignatureLink: string;
    parentSignatureLink: string;
    gapCertificateLink: string;
    aadharCardLink: string;
  };
  handleFormDataChange: (field: string, value: any) => void;
  nextTab: () => void;
  prevTab: () => void;
}

const DocumentDetails: React.FC<DocumentDetailsProps> = ({
  formData,
  handleFormDataChange,
  nextTab,
  prevTab
}) => {
  return (
    <TabsContent value="documents" className="px-6 pb-6">
      <Card>
        <CardHeader>
          <CardTitle>Required Documents</CardTitle>
          <CardDescription>Please provide links to all required documents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="photo-link">Passport Size Photograph *</Label>
              <Input
                id="photo-link"
                name="entry.1169223442294"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.photoLink}
                onChange={(e) => handleFormDataChange("photoLink", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="candidate-signature-link">{`Candidate's Signature *`}</Label>
              <Input
                id="candidate-signature-link"
                name="entry.1825533637"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.candidateSignatureLink}
                onChange={(e) => handleFormDataChange("candidateSignatureLink", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="parent-signature-link">{`Parent's Signature`}</Label>
              <Input
                id="parent-signature-link"
                name="entry.559519654"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.parentSignatureLink}
                onChange={(e) => handleFormDataChange("parentSignatureLink", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ipu-form-link">Duly submitted filled up online registration  form of GGSIPU  in the portal for relevant programme</Label>
              <Input
                id="ipu-form-link"
                name="entry.1254852313"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.ipuFormLink}
                onChange={(e) => handleFormDataChange("ipuFormLink", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admit-card-link">Admit Card & Rank Proof</Label>
              <Input
                id="admit-card-link"
                name="entry.1823903824"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.admitCardLink}
                onChange={(e) => handleFormDataChange("admitCardLink", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gap-certificate-link">Gap Certificate (if applicable)</Label>
              <Input
                id="gap-certificate-link"
                name="entry.1255066487"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.gapCertificateLink}
                onChange={(e) => handleFormDataChange("gapCertificateLink", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="aadhar-link">Copy of Aadhar Card *</Label>
              <Input
                id="aadhar-link"
                name="entry.1325891996"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.aadharCardLink}
                onChange={(e) => handleFormDataChange("aadharCardLink", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-700 text-sm">
              {`All documents should be uploaded to Google Drive with access set to "Anyone with the link"`}
            </p>
            <p className="text-blue-700 text-sm mt-2">
              {`Make sure all images are clear and readable`}
            </p>
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

export default DocumentDetails;
import React, { useState } from "react"; // Add useState import
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ExternalLink, Send } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"; // Add Checkbox import

interface ReviewAndSubmitProps {
  formData: {
    programSelection: {
      firstYearProgram: string;
      secondYearProgram: string;
      programmeName: string;
      programmeCode: string;
      preferredShift: string;
      registrationNumber: string;
      registrationDate: string;
      rollNumber: string;
      rank: string;
    };
    applicant: {
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
    tenth: {
      board: string;
      rollNumber: string;
      yearOfPassing: string;
      subjects: {
        subject1: { name: string; marks: string };
        subject2: { name: string; marks: string };
        subject3: { name: string; marks: string };
        subject4: { name: string; marks: string };
        subject5: { name: string; marks: string };
        subject6: { name: string; marks: string };
      };
      totalMarksObtained: string;
      maximumMarks: string;
      percentage: string;
      marksheetLink: string;
    };
    twelfth: {
      board: string;
      rollNumber: string;
      yearOfPassing: string;
      subjects: {
        subject1: { name: string; marks: string };
        subject2: { name: string; marks: string };
        subject3: { name: string; marks: string };
        subject4: { name: string; marks: string };
        subject5: { name: string; marks: string };
        subject6: { name: string; marks: string };
      };
      pcmMarks: string;
      pcmPercentage: string;
      totalMarksObtained: string;
      maximumMarks: string;
      percentage: string;
      marksheetLink: string;
    };
    diploma?: {
      university: string;
      rollNumber: string;
      firstYear: {
        yearOfPassing: string;
        subjects: string;
        maximumMarks: string;
        marksObtained: string;
        percentage: string;
      };
      secondYear: {
        subjects: string;
        maximumMarks: string;
        marksObtained: string;
        percentage: string;
      };
      thirdYear: {
        subjects: string;
        maximumMarks: string;
        marksObtained: string;
        percentage: string;
      };
      aggregate: {
        maximumMarks: string;
        marksObtained: string;
        percentage: string;
      };
      marksheetLink: string;
    };
    documents: {
      photoLink: string;
      admitCardLink: string;
      ipuFormLink: string;
      candidateSignatureLink: string;
      parentSignatureLink: string;
      gapCertificateLink: string;
      aadharCardLink: string;
    };
    payment: {
      paymentProofLink: string;
    };
  };
  prevTab: () => void;
  handleSubmit: () => void;
}

const ReviewAndSubmit: React.FC<ReviewAndSubmitProps> = ({
  formData,
  prevTab,
  handleSubmit
}) => {
  // Add state for tracking checkbox
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch (e) {
      console.log(e);
      return dateString;
    }
  };

  const formatPrograms = (programsString: string) => {
    if (!programsString) return "";
    return programsString.split(',').join(', ');
  };

  const extractDriveId = (driveUrl: string): string => {
    if (!driveUrl) return "";

    let id = "";
    if (driveUrl.includes("/file/d/")) {
      const match = driveUrl.match(/\/file\/d\/([^\/]+)/);
      if (match && match[1]) id = match[1];
    } else if (driveUrl.includes("id=")) {
      const match = driveUrl.match(/id=([^&]+)/);
      if (match && match[1]) id = match[1];
    }

    return id;
  };

  const getDriveImageUrl = (driveUrl: string): string => {
    const id = extractDriveId(driveUrl);
    if (!id) return "";

    return `https://drive.google.com/thumbnail?id=${id}&sz=w200-h200`;
  };

  const renderDocument = (link: string, title: string, asImage: boolean = false) => {
    if (link.trim().length == 0 || !link.includes("drive.google.com")) {
      return <div className="document-preview">
        <p className="mb-1 font-medium">{title}:</p>
        <p>Not uploaded</p>
      </div>
    }
    if (asImage) {
      const imageUrl = getDriveImageUrl(link);

      return (
        <div className="document-preview">
          <p className="mb-1 font-medium">{title}:</p>
          <div className="relative border rounded-md overflow-hidden w-[200] h-fit">
            <Image
              src={imageUrl}
              alt={title}
              width={200}
              height={200}
              className="w-full max-w-[200px] h-auto object-contain"
              onError={(e) => {
                // If image fails to load, show fallback content
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'flex items-center justify-center bg-gray-100 w-full h-full p-4 text-center';
                  fallback.style.minHeight = '120px';
                  fallback.innerHTML = `
                    <div>
                      <p class="text-xs text-gray-500">Preview unavailable</p>
                      <a 
                        href="${link}" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-xs text-blue-600 hover:text-blue-800 underline flex items-center justify-center gap-1 mt-2"
                      >
                        Open in Drive
                      </a>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            id="view_original_document"
            className="text-xs text-blue-600 hover:text-blue-800 underline flex items-center gap-1 mt-1"
          >
            View original <ExternalLink className="h-2 w-2" />
          </a>
        </div>
      );
    }

    // Return link for documents that don't need image preview
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
      >
        View {title} <ExternalLink className="h-3 w-3" />
      </a>
    );
  };

  return (
    <TabsContent value="review" className="px-6 pb-6">
      <Card>
        <CardHeader>
          <CardTitle>Review & Submit</CardTitle>
          <CardDescription>Please review your information before submitting</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6" id="download">
          <div className="w-full" id="page1">
            <div>
              <h3 className="text-lg font-semibold mb-2">Program Selection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  {formData.programSelection.firstYearProgram && <p><strong>First Year Programs:</strong> {formatPrograms(formData.programSelection.firstYearProgram)}</p>}
                  {formData.programSelection.secondYearProgram && <p><strong>Second Year Programs:</strong> {formatPrograms(formData.programSelection.secondYearProgram)}</p>}
                  <p><strong>Programme Name:</strong> {formData.programSelection.programmeName}</p>
                  <p><strong>Programme Code:</strong> {formData.programSelection.programmeCode}</p>
                  <p><strong>Preferred Shift:</strong> {formData.programSelection.preferredShift}</p>
                  <p><strong>GGSIPU Online Application Form (Registration No.):</strong> {formData.programSelection.registrationNumber}</p>
                </div>
                <div>
                  <p><strong>Registration Date:</strong> {formData.programSelection.registrationDate}</p>
                  <p><strong>NLT(JEE)/CET Roll No.(L.E.):</strong> {formData.programSelection.rollNumber}</p>
                  <p><strong>NLT(JEE)/CET Rank (L.E.) :</strong> {formData.programSelection.rank}</p>
                </div>
              </div>
            </div>

            <Separator className="my-5" />

            <div>
              <h3 className="text-lg font-semibold mb-2">Applicant Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-start gap-4">
                    <div>
                      <p><strong>Candidate Name:</strong> {formData.applicant.name}</p>
                      <p><strong>{`Father's Name:`}</strong> {formData.applicant.fatherName}</p>
                      <p><strong>{`Mother's Name:`}</strong> {formData.applicant.motherName}</p>
                      <p><strong>Date of Birth:</strong> {formatDate(formData.applicant.dob)}</p>
                      <p><strong>Category:</strong> {formData.applicant.category}</p>
                      <div className="py-2"> {renderDocument(formData.applicant.categoryCertificate, "Caste/Category Certificate, if belongs to reverse category/reserved seat", true)}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p><strong>Postal Address:</strong> {formData.applicant.address}</p>
                  <p><strong>Mobile Number:</strong> {formData.applicant.contact}</p>
                  <p><strong>Email Address:</strong> {formData.applicant.email}</p>
                  <p><strong>Region:</strong> {formData.applicant.region}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div id="page2">
            <h3 className="text-lg font-semibold mb-2" >Educational Qualifications</h3>
            <div className="text-sm">
              <h4 className="font-medium mt-2">Class X</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p><strong>Board:</strong> {formData.tenth.board}</p>
                <p><strong>Roll Number:</strong> {formData.tenth.rollNumber}</p>
                <p><strong>Year of Passing:</strong> {formData.tenth.yearOfPassing}</p>
              </div>

              <div className="mt-2">
                <p className="font-medium">Subject-wise Marks</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                  <p><strong>{formData.tenth.subjects.subject1.name}:</strong> {formData.tenth.subjects.subject1.marks}</p>
                  <p><strong>{formData.tenth.subjects.subject2.name}:</strong> {formData.tenth.subjects.subject2.marks}</p>
                  <p><strong>{formData.tenth.subjects.subject3.name}:</strong> {formData.tenth.subjects.subject3.marks}</p>
                  <p><strong>{formData.tenth.subjects.subject4.name}:</strong> {formData.tenth.subjects.subject4.marks}</p>
                  <p><strong>{formData.tenth.subjects.subject5.name}:</strong> {formData.tenth.subjects.subject5.marks}</p>
                  <p><strong>{formData.tenth.subjects.subject6.name}:</strong> {formData.tenth.subjects.subject6.marks}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                <p className="self-end pb-5"><strong>Total Marks:</strong> {formData.tenth.totalMarksObtained} / {formData.tenth.maximumMarks}</p>
                <p className="self-end pb-5"><strong>Percentage:</strong> {formData.tenth.percentage}%</p>
              </div>
              <div className="py-2">{renderDocument(formData.tenth.marksheetLink, "10th Marksheet and Passing Certificate", true)}</div>

              <h4 className="font-medium mt-4">Class XII</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p><strong>Board:</strong> {formData.twelfth.board}</p>
                <p><strong>Roll Number:</strong> {formData.twelfth.rollNumber}</p>
                <p><strong>Year of Passing:</strong> {formData.twelfth.yearOfPassing}</p>
              </div>

              <div className="mt-2">
                <p className="font-medium">Subject-wise Marks</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                  <p><strong>{formData.twelfth.subjects.subject1.name}:</strong> {formData.twelfth.subjects.subject1.marks}</p>
                  <p><strong>{formData.twelfth.subjects.subject2.name}:</strong> {formData.twelfth.subjects.subject2.marks}</p>
                  <p><strong>{formData.twelfth.subjects.subject3.name}:</strong> {formData.twelfth.subjects.subject3.marks}</p>
                  <p><strong>{formData.twelfth.subjects.subject4.name}:</strong> {formData.twelfth.subjects.subject4.marks}</p>
                  <p><strong>{formData.twelfth.subjects.subject5.name}:</strong> {formData.twelfth.subjects.subject5.marks}</p>
                  <p><strong>{formData.twelfth.subjects.subject6.name}:</strong> {formData.twelfth.subjects.subject6.marks}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                <p className="self-end pb-5"><strong>PCM Marks:</strong> {formData.twelfth.pcmMarks}</p>
                <p className="self-end pb-5"><strong>PCM Percentage:</strong> {formData.twelfth.pcmPercentage}%</p>
                <p><strong>Total Marks:</strong> {formData.twelfth.totalMarksObtained} / {formData.twelfth.maximumMarks}</p>
                <p><strong>Percentage:</strong> {formData.twelfth.percentage}%</p>
              </div>
              <div className="py-2">{renderDocument(formData.twelfth.marksheetLink, "12th Marksheet and Passing Certificate ( Both sides )", true)}</div>

              {formData.diploma?.university && (
                <>
                  <h4 className="font-medium mt-4">Diploma / B.Sc. Degree (Lateral Entry)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <p><strong>University:</strong> {formData.diploma.university}</p>
                    <p><strong>Roll Number:</strong> {formData.diploma.rollNumber}</p>
                  </div>

                  <div className="mt-3">
                    <h5 className="font-medium mb-1">First Year</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p><strong>Year of Passing:</strong> {formData.diploma.firstYear.yearOfPassing}</p>
                      <p><strong>Subjects:</strong> {formData.diploma.firstYear.subjects}</p>
                      <p><strong>Marks Obtained:</strong> {formData.diploma.firstYear.marksObtained} / {formData.diploma.firstYear.maximumMarks}</p>
                      <p><strong>Percentage:</strong> {formData.diploma.firstYear.percentage}%</p>
                    </div>

                    <h5 className="font-medium mb-1 mt-3">Second Year</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p><strong>Subjects:</strong> {formData.diploma.secondYear.subjects}</p>
                      <p><strong>Marks Obtained:</strong> {formData.diploma.secondYear.marksObtained} / {formData.diploma.secondYear.maximumMarks}</p>
                      <p><strong>Percentage:</strong> {formData.diploma.secondYear.percentage}%</p>
                    </div>

                    <h5 className="font-medium mb-1 mt-3">Third Year</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p><strong>Subjects:</strong> {formData.diploma.thirdYear.subjects}</p>
                      <p><strong>Marks Obtained:</strong> {formData.diploma.thirdYear.marksObtained} / {formData.diploma.thirdYear.maximumMarks}</p>
                      <p><strong>Percentage:</strong> {formData.diploma.thirdYear.percentage}%</p>
                    </div>

                    <h5 className="font-medium mb-1 mt-3">Aggregate</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <p className="self-end pb-5"><strong>Marks Obtained:</strong> {formData.diploma.aggregate.marksObtained} / {formData.diploma.aggregate.maximumMarks}</p>
                      <p className="self-end pb-5"><strong>Percentage:</strong> {formData.diploma.aggregate.percentage}%</p>
                    </div>

                    <div>{renderDocument(formData.diploma.marksheetLink, "Diploma Marksheet of all semester examinations and Passing Certificate (for Lateral Entry)", true)}</div>
                  </div>
                </>
              )}
            </div>
          </div>

          <Separator />

          <div className="w-full" id="page3">
            <div >
              <h3 className="text-lg font-semibold mb-2">Document Uploads</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-sm">
                <div>{renderDocument(formData.documents.photoLink, "Candidate Photo", true)}</div>
                <div>{renderDocument(formData.documents.candidateSignatureLink, "Candidate Signature", true)}</div>
                <div>{renderDocument(formData.documents.parentSignatureLink, "Parent Signature", true)}</div>
                <div>{renderDocument(formData.documents.ipuFormLink, "Duly submitted filled up online registration  form of GGSIPU  in the portal for relevant programme", true)}</div>
                <div>{renderDocument(formData.documents.admitCardLink, "Admit Card and Rank Proof", true)}</div>
                <div>{renderDocument(formData.documents.gapCertificateLink, "Gap year certificate ( if any )", true)}</div>
                <div>{renderDocument(formData.documents.aadharCardLink, "Copy of Adhaar Card", true)}</div>
              </div>
            </div>

            <Separator className="my-5" />

            <div>
              <h3 className="text-lg font-semibold mb-2">Payment</h3>
              <div className="max-w-xs">
                {renderDocument(formData.payment.paymentProofLink, "Payment Receipt", true)}
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
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
                <li>Duly Submitted Filled Up Online Registration Form of GGSIPU in the portal for relevant programme.</li>
                <li>Admit Card and Rank Proof.</li>
                <li>10th Marksheet and Passing Certificate.</li>
                <li>12th Marksheet and Passing Certificate.</li>
                <li>Diploma Marksheet of all semester examinations and Passing Certificate (for Lateral Entry).</li>
                <li>Caste/Category Certificate, if belongs to reverse category/reserved seat.</li>
                <li>Gap Year Certificate (If any).</li>
                <li>Copy of Adhaar Card.</li>
                <li>Proof of Payment of registration / Processing Fee of RS 2500/- only.</li>
              </ol>

              <p className="font-bold text-amber-700 text-sm space-y-1 pt-3">After submitting the form , kindly send the downloaded pdf copy of this form to <a className="text-amber-800 underline hover:text-amber-600" href="mailto:mq_admissions_2026-27@msit.in">mq_admissions_2026-27@msit.in</a> </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6 text-justify">
              <h4 className="text-amber-800 font-semibold mb-2">Disclaimer</h4>
              <p className="text-amber-700 text-sm font-medium mt-3">
                {`The admission process for the management seat in the institute is subject to permission from the Hon'ble High Court of Delhi to admit the students against the management seats in the institute. We shall not claim any right in the case institute is not permitted to conduct management quota counselling and admission for the session 2026-27 in the case institute is not getting permission for the same in Pending case LPA No. 466 of 2023 titled SURAJMAL MEMORIAL EDUCATION SOCIETY AND OTHERS and I am applying in the institute on our own risk.`}
              </p>

              <div className="flex items-center align-middle space-x-2 mt-4">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  className="mt-1 self-center"
                />
                <label
                  htmlFor="terms"
                  className="text-amber-800 text-sm cursor-pointer self-center font-medium"
                >
                  I have read and agree to all terms highlighted above
                </label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button type="button" variant="outline" onClick={prevTab} className="flex items-center gap-2 cursor-pointer w-full sm:w-auto">
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              type="button"
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2 w-full sm:w-auto cursor-pointer"
              disabled={!agreedToTerms}
            >
              <Send className="h-4 w-4" /> Submit Application
            </Button>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default ReviewAndSubmit;
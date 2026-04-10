'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Home } from "lucide-react"
import { useEffect, useState } from "react"

export default function ConfirmationPage() {
  const [isformSubmitted, setFormSubmitted] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("isformSubmitted")) {
        localStorage.removeItem("isformSubmitted");
      } else {
        setFormSubmitted(false);
      }
    }
  }, []);

  if (!isformSubmitted) {
    return <div className="w-full min-h-[700px] bg-gray-200 flex justify-center align-middle">
      <h1 className="self-center text-xl">Please try submitting new form !</h1>
    </div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="max-w-md w-full shadow-lg border-0 py-0">
        <CardHeader className="bg-gradient-to-r py-5 from-green-600 to-green-800 text-white rounded-t-lg">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Application Submitted Successfully</CardTitle>
          <CardDescription className="text-gray-100 text-center">Your application has been received</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-2 px-6">
          <div className="space-y-4">
            <p className="text-gray-700">
              Thank you for submitting your application for B.Tech Management Quota Admission at MSIT.
            </p>
            <p className="text-gray-700">
              Your application has been received and is being processed. Please keep a copy of your application PDF for
              future reference.
            </p>
            <p className="font-bold text-amber-700 text-sm space-y-1 pt-3">After submitting the form , kindly send the downloaded pdf copy of this form to <a className="text-amber-800 underline hover:text-amber-600" href="mailto:mqadmission2025-26@msit.in">mqadmission2025-26@msit.in</a> </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-700">
              <p>
                For any queries, please contact the admission office or visit the MSIT website at{" "}
                <a
                  href="http://www.msit.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.msit.in
                </a>
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center pt-2 pb-6 px-6">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

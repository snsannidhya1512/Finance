// import { Upload } from "lucide-react";
// import { useCSVReader } from "react-papaparse";
// import { Button } from "@/components/ui/button";

// type Props = {
//   onUpload: (results: any) => void;
// };

// export const UploadButton = ({ onUpload }: Props) => {
//   const { CSVReader } = useCSVReader();
//   return (
//     <CSVReader>
//       {({ getRootProp }: any) => (
//         <Button size="sm" className="w-full lg:w-auto" {...getRootProps}>
//           <Upload className="size-4 mr-2" />
//           Import
//         </Button>
//       )}
//     </CSVReader>
//   );
// };

import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";
import { Button } from "@/components/ui/button";

type Props = {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps, acceptedFile }: any) => (
        <div {...getRootProps()} className="w-full lg:w-auto">
          <Button size="sm" className="w-full lg:w-auto">
            <Upload className="size-4 mr-2" />
            Import
          </Button>
        </div>
      )}
    </CSVReader>
  );
};

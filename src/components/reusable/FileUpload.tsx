import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    ArrowUpTrayIcon,
  } from "@heroicons/react/24/outline";

interface FileUploadProps {
  onFilesUploaded: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSelectedFiles(acceptedFiles);
      onFilesUploaded(acceptedFiles);
    },
    [onFilesUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} className="w-full space-x-4 flex items-center px-4 py-2 bg-gray-400  text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-white">
      <ArrowUpTrayIcon className='size-6 text-4xl' />
        <input {...getInputProps()} />
        <div className='font-bold lg:text-xl text-md'>Choose File (.xlsx, csv ) </div>
      </div>
      <div>
        {selectedFiles.length > 0 && (
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FileUpload;
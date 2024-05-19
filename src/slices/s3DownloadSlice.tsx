import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const FileList: React.FC = () => {
    const [files, setFiles] = useState<string[]>([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axiosInstance.get<string[]>('/files');
                setFiles(response.data);
            } catch (error) {
                console.error('Fehler beim Abrufen der Dateiliste:', error);
            }
        };

        fetchFiles();
    }, []);

    
//receive data as blob, create blob-url for the downloaded file, create link for the file-download, delete temporary url and link

    const handleDownload = async (fileName: string) => {
        try {
            const response = await axiosInstance.get(`/download/${fileName}`, {
                responseType: 'blob',
            });
            
            const blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();

            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Fehler beim Herunterladen der Datei:', error);
        }
    };

    return (
        <div>
            <h2>Dateiliste</h2>
            <ul>
                {files.map((file, index) => (
                    <li key={index} onClick={() => handleDownload(file)}>
                        {file}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;

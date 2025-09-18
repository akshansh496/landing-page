import { Upload } from "lucide-react";

export default function UploadVideoCard() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-[600px] rounded-2xl bg-[#0f172a] border border-gray-700 p-8 shadow-lg shadow-blue-900/50">
        {/* Header */}
        <h2 className="text-green-400 text-lg font-medium mb-4">
          📹 Upload Training Video
        </h2>

        {/* Upload box */}
        <div className="border-2 border-dashed border-gray-600 rounded-xl p-10 flex flex-col items-center justify-center text-center text-gray-300 hover:border-green-400 transition">
          <Upload className="w-12 h-12 text-gray-400 mb-4" />
          <p className="mb-2">
            Upload your training video for AI analysis
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Supported formats: MP4, MOV, AVI (Max 100MB)
          </p>

          {/* Button */}
          <button className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md shadow-green-500/50 transition">
            Choose Video File
          </button>
        </div>
      </div>
    </div>
  );
}

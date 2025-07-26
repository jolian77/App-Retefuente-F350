import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setDownloadUrl(null);
  };

  const handleUpload = async () => {
    if (!file) return alert("Selecciona un archivo Excel primero.");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8000/upload/", formData, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error al subir archivo:", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Procesador de Archivo Excel</h1>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir y Procesar</button>
      {downloadUrl && (
        <div>
          <a href={downloadUrl} download="formulario_generado.xlsx">
            Descargar Formulario Generado
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

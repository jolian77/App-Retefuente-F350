# Aplicativo Web para Carga y Procesamiento de Excel

Este proyecto permite:

- Subir un archivo Excel con hojas específicas: Datos, PE, Balance, Auxiliar.
- Alimentar automáticamente una hoja `Resumen`.
- Editar columnas C, D, L y M.
- Generar hoja `Formulario` según fórmulas.
- Descargar el archivo actualizado.

## Backend

- Python 3.9+
- FastAPI
- openpyxl

### Ejecutar backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Frontend

> El frontend en React será provisto en la siguiente parte o en el paquete completo.

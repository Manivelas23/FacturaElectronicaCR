using System;

namespace Factura_Electronica.Models
{
    public class Ubicacion
    {
        private string Provincia;
        private string Canton;
        private string Distrito;
        private string Barrio;
        private string OtrasSenas;
        private int IdUbicacion;

        public string Provincia1
        {
            get => Provincia;
            set => Provincia = value;
        }
        public string Canton1
        {
            get => Canton;
            set => Canton = value;
        }
        public string Distrito1
        {
            get => Distrito;
            set => Distrito = value;
        }
        public string Barrio1
        {
            get => Barrio;
            set => Barrio = value;
        }
        public string OtrasSenas1
        {
            get => OtrasSenas;
            set => OtrasSenas = value;
        }
        public int IdUbicacion1
        {
            get => IdUbicacion;
            set => IdUbicacion = value;
        }

        public string Actualiza_ubicacion()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC UPDATE_15 ?,?,?,?,?,?";

                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(IdUbicacion1, "int");
                    objeto_conexion.nuevo_parametro(Provincia1, "string");
                    objeto_conexion.nuevo_parametro(Canton1, "string");
                    objeto_conexion.nuevo_parametro(Distrito1, "string");
                    objeto_conexion.nuevo_parametro(Barrio1, "string");
                    objeto_conexion.nuevo_parametro(OtrasSenas1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Operación Realizada Con Éxito";
                }
                else return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Elimina_ubicacion()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD()) ///verificamos si el metodo activaBD está en true
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC DELETE_15 ?"; ///almacenamos la consulta en una variable
                    objeto_conexion.nueva_consulta(query); ///usamos el metodo de la clase "Conexionbasedatos" y enviamos la variable que tiene la consulta

                    objeto_conexion.nuevo_parametro(IdUbicacion1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Operación Realizada Con Éxito";
                }
                else return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return "";
            }
        }
        public string Inserta_ubicacion()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();
                if (objeto_conexion.activaBD())
                {
                    string query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC INSERT_14 ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(IdUbicacion1, "int");
                    objeto_conexion.nuevo_parametro(Provincia1, "string");
                    objeto_conexion.nuevo_parametro(Canton1, "string");
                    objeto_conexion.nuevo_parametro(Distrito1, "string");
                    objeto_conexion.nuevo_parametro(Barrio1, "string");
                    objeto_conexion.nuevo_parametro(OtrasSenas1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Operación Realizada Con Éxito";
                }
                else
                return "Sin Conexión con la Base de Datos";
        }
    }
}

/*
 
 try{
}
catch{
}
 */
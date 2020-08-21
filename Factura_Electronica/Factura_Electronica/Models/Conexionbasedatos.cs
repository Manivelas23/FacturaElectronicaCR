using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.OleDb;
using System.Configuration;

namespace Factura_Electronica.Models ///nombre corregido
{
    public class ConexionconBD
    {
        ///Configuraciones
        public OleDbConnection conexion;
        public OleDbCommand comando;
        OleDbTransaction transaccion;

        ///metodos
        public bool activaBD()
        {
            string connStr = ConfigurationManager.ConnectionStrings["conexiondeprueba"].ConnectionString;
            conexion = new OleDbConnection(connStr);
            try
            {
                conexion.Open();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }
        public OleDbDataReader busca()
        {
            OleDbDataReader busca_int;
            comando.Prepare();
            busca_int = comando.ExecuteReader(); 
            comando.CommandTimeout = 0;

            conexion.Close();
            conexion.Dispose();
            return busca_int;
        }
        public bool nueva_consulta(string _Consulta)
        {
            comando = new OleDbCommand(_Consulta, conexion);
            return false;
        }
        public bool nuevo_parametro(object ParametroProcedimiento, string tipo)
        {
            OleDbParameter ParametroLibreria;
            switch (tipo)
            {
                case "int":
                    ParametroLibreria = comando.Parameters.Add("@InputParm", OleDbType.BigInt);
                    ParametroLibreria.Value = ParametroProcedimiento;
                    break;
                case "string":
                    ParametroLibreria = comando.Parameters.Add("@InputParm", OleDbType.VarChar, 2500);
                    ParametroLibreria.Value = ParametroProcedimiento;
                    break;
                case "decimal":
                    ParametroLibreria = comando.Parameters.Add("@InputParm", OleDbType.Decimal, 10);
                    ParametroLibreria.Value = ParametroProcedimiento;
                    ParametroLibreria.Precision = 18;
                    ParametroLibreria.Scale = 5;
                    break;
                case "date":
                    ParametroLibreria = comando.Parameters.Add("@InputParm", OleDbType.Date);
                    ParametroLibreria.Value = ParametroProcedimiento;
                    break;
            }
            return false;
        }
        public bool ejecutasql(string sql)
        {
            activaBD();
            transaccion = conexion.BeginTransaction();
            try
            {
                comando = new OleDbCommand(sql, conexion);
                comando.Transaction = transaccion;
                comando.ExecuteNonQuery();
                transaccion.Commit();
                return true;
            }
            catch (Exception e)
            {
                transaccion.Rollback();
                return false;               

            }
            finally
            {
                conexion.Close();
                conexion.Dispose();
            }

        }
        public void cuadricula(string csql, System.Data.DataSet aux)
        {
            activaBD();
            OleDbDataAdapter da = new OleDbDataAdapter(csql, conexion);
            da.Fill(aux);


        }
        public ConexionconBD() 
        { 
        }

    }
}
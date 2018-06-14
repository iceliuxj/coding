using System;
using System.Collections.Generic;
using System.Data;
using lost.Models;
using MySql.Data.MySqlClient;
using Dapper;
using System.Linq;

namespace lost.Trails {
    public class AddTrail {
        static string server = "localhost";
        static string db = "Trail"; //Change to your schema name
        static string port = "3306"; 
        static string user = "root";
        static string pass = "531531o0!";
        internal static IDbConnection Connection {
            get {
                return new MySqlConnection($"Server={server};Port={port};Database={db};UserID={user};Password={pass};SslMode=None");
            }
        }
        //get all trails
        public List<Trail> GetAllTrails(){
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                  string query = "SELECT * from trail";
                  dbConnection.Open();
                  var qres = dbConnection.Query<Trail>(query);

                  return qres.ToList();
                }
            }     
        }

        //add new trail
        public void Newtrail(Trail trail){
            using (IDbConnection dbConnection = Connection){
                string query = "INSERT INTO trails (name, description, length, change, longitude, latitude) VALUES (@name,@description, @length,@longitude, @latitude)";
                dbConnection.Open();
                dbConnection.Execute(query, trail);
            }
        }
    }
}
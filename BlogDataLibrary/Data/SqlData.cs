using System.Linq; 
using BlogDataLibrary.Database;
using BlogDataLibrary.Models; 

namespace BlogDataLibrary.Data
{
    public class SqlData : ISqlData
    {
        private readonly ISqlDataAccess _db;
        private const string connectionStringName = "SqlDb";

        public SqlData(ISqlDataAccess db)
        {
            _db = db;
        }
        public UserModel Authenticate(string userName, string password)
        {
            var result = _db.LoadData<UserModel, dynamic>(
                "spUsers_Authenticate",
                new { UserName = userName, Password = password }, // match SP params
                connectionStringName,
                true
            ).FirstOrDefault();

            return result;
        }
        public void Register(string username, string firstName, string lastName, string password)
        {
            _db.SaveData<dynamic>(
                "dbo.spUsers_Register",
                new { UserName = username, FirstName = firstName, LastName = lastName, Password = password },
                connectionStringName,
                true
            );
        }
        public void AddPost(PostModel post)
        {
            _db.SaveData(
                "dbo.spPosts_Insert",
                new { post.UserId, post.Title, post.Body, post.DateCreated },
                connectionStringName,
                true
            );
        }
        public List<ListPostModel> ListPosts()
        {
            return _db.LoadData<ListPostModel, dynamic>(
                "dbo.spPosts_List",
                new { },
                connectionStringName,
                true
            ).ToList();
        }
        public ListPostModel ShowPostDetails(int id)
        {
            return _db.LoadData<ListPostModel, dynamic>(
                "dbo.spPosts_Detail",   // match your stored procedure name
                new { Id = id },        // param name matches @Id in SP
                connectionStringName,
                true
            ).FirstOrDefault();
        }

    }
}

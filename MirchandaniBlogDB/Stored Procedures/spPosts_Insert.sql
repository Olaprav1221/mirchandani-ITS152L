CREATE PROCEDURE [dbo].[spPosts_Insert]
    @UserId INT,
    @Title NVARCHAR(100),
    @Body TEXT,
    @DateCreated DATETIME2(7)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.Posts (UserId, Title, Body, [Date Created])
    VALUES (@UserId, @Title, @Body, @DateCreated);
END

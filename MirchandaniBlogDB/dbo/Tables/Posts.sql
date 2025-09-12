﻿CREATE TABLE [dbo].[Posts] (
  [Id]      INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [UserId]  INT NOT NULL,
  [Title]   NVARCHAR(100) NOT NULL,
  [Body]    TEXT NOT NULL,
  [Date Created] DATETIME2 NOT NULL, 
    CONSTRAINT [FK_Posts_Users]
        FOREIGN KEY ([UserId])
        REFERENCES [dbo].[Users]([Id])
);
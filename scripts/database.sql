-- create databases
CREATE SCHEMA `db1` DEFAULT CHARACTER SET utf8mb4;
CREATE SCHEMA `db2` DEFAULT CHARACTER SET utf8mb4;
CREATE SCHEMA `db3` DEFAULT CHARACTER SET utf8mb4;


-- create tables
-- db1, db2
CREATE TABLE `users` (
    `id` VARCHAR(36) NOT NULL,
    `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    `deletedAt` timestamp(6) NULL DEFAULT NULL,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
    UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
    PRIMARY KEY (`id`)
)  ENGINE=INNODB;

CREATE TABLE `logs`  (
  `id` varchar(36) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` timestamp(6) NULL DEFAULT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB;

-- db3
CREATE TABLE `roles` (
    `id` VARCHAR(36) NOT NULL,
    `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    `deletedAt` timestamp(6) NULL DEFAULT NULL,
    `name` VARCHAR(255) NOT NULL,
    `enabled` TINYINT NOT NULL DEFAULT 1,
    UNIQUE INDEX `IDX_ae4578dcaed5adff96595e6166` (`name`),
    PRIMARY KEY (`id`)
)  ENGINE=INNODB;

-- insert data
-- db1, db2
INSERT INTO `users` (`id`, `username`, `email`) VALUES ('dde2ca45-c51b-412e-a157-4f96830850c6', 'tang', 'tang@gmail.com');

-- db3
INSERT INTO `roles` (`id`, `name`, `enabled`) VALUES ('342e16c7-3f4a-47fc-acc5-2a8e2b854593', 'Admin', '1');
INSERT INTO `roles` (`id`, `name`, `enabled`) VALUES ('bc3d61d8-0c39-49f0-b1bc-f497144c83e1', 'User', '1');

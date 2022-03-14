-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 14 Mar 2022 pada 11.04
-- Versi server: 10.5.13-MariaDB-cll-lve
-- Versi PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u1022458_test_remote`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `businesses`
--

CREATE TABLE `businesses` (
  `id` varchar(64) NOT NULL,
  `userId` varchar(64) DEFAULT NULL,
  `businessAccountId` varchar(64) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `type` int(10) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phoneNumber` varchar(191) DEFAULT NULL,
  `registrationDate` datetime DEFAULT NULL,
  `province` varchar(191) DEFAULT NULL,
  `city` varchar(191) DEFAULT NULL,
  `location` varchar(191) DEFAULT NULL,
  `nameOnKtp` varchar(191) DEFAULT NULL,
  `noKtp` varchar(191) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `businesses`
--

INSERT INTO `businesses` (`id`, `userId`, `businessAccountId`, `name`, `type`, `address`, `phoneNumber`, `registrationDate`, `province`, `city`, `location`, `nameOnKtp`, `noKtp`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('183d8554-5391-4c28-b1f9-23da7bb33b2e', NULL, '183d8554-5391-4c28-b1f9-23da7bb33b2e', 'Razer', NULL, NULL, '89653478467', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-03-14 02:16:39', '2022-03-14 02:16:39', NULL),
('4037b560-5fa6-4855-9680-b40bf9e3e311', NULL, '4037b560-5fa6-4855-9680-b40bf9e3e311', 'Kumara', NULL, 'Jalan Bengawan Solo No 22', '89653478467', NULL, NULL, NULL, NULL, '', '-', NULL, '2022-03-12 04:39:25', '2022-03-13 12:14:53', NULL),
('afa29c10-9607-44b8-9cf7-84b04efdd150', NULL, 'afa29c10-9607-44b8-9cf7-84b04efdd150', 'Lenovo', NULL, NULL, '89653478467', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-03-14 02:18:03', '2022-03-14 02:18:03', NULL),
('e9a66532-49d6-446e-b21c-c6dcca1a91d1', NULL, 'e9a66532-49d6-446e-b21c-c6dcca1a91d1', 'Marteel', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-03-13 07:37:24', '2022-03-13 07:37:24', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `business_accounts`
--

CREATE TABLE `business_accounts` (
  `id` varchar(199) NOT NULL,
  `businessId` varchar(199) DEFAULT NULL,
  `email` varchar(199) NOT NULL,
  `password` varchar(199) NOT NULL,
  `isVerified` tinyint(4) NOT NULL DEFAULT 0,
  `lastLogin` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `business_accounts`
--

INSERT INTO `business_accounts` (`id`, `businessId`, `email`, `password`, `isVerified`, `lastLogin`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('183d8554-5391-4c28-b1f9-23da7bb33b2e', '183d8554-5391-4c28-b1f9-23da7bb33b2e', 'hanifkumara00@gmail.com', '$2a$10$7Rn3P/jjBQIq/.05.NJfF.wWr535372e8OqG/pLM./4z6yaLTa7d.', 1, NULL, '2022-03-14 02:16:39', '2022-03-14 02:16:40', NULL),
('4037b560-5fa6-4855-9680-b40bf9e3e311', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'hnflasting@gmail.com', '$2a$10$3U25ReNzOSE3HzGZHxKiSe9J1bNzVNQtQnWsIcjEmKVXRupJvzEiC', 1, NULL, '2022-03-12 04:39:25', '2022-03-12 04:39:25', NULL),
('afa29c10-9607-44b8-9cf7-84b04efdd150', 'afa29c10-9607-44b8-9cf7-84b04efdd150', 'hanip.mutu@gmail.com', '$2a$10$ACPBvo30KxjdirglVp3nzOryX6qmhw1pCrvD7bnWvqoEHrIThjSTK', 1, NULL, '2022-03-14 02:18:02', '2022-03-14 02:18:03', NULL),
('e9a66532-49d6-446e-b21c-c6dcca1a91d1', 'e9a66532-49d6-446e-b21c-c6dcca1a91d1', 'hanifkumara@gmail.com', '$2a$10$xYMUFotDwUwRVUl/f/Fsp.Nc6j6pX8F74vm2oF5imehkvO7r9idpe', 1, NULL, '2022-03-13 07:37:24', '2022-03-13 07:37:25', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `customers`
--

CREATE TABLE `customers` (
  `id` varchar(64) NOT NULL,
  `username` varchar(191) NOT NULL,
  `phoneNumber` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `customers`
--

INSERT INTO `customers` (`id`, `username`, `phoneNumber`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('227fdd92-7e33-4866-93a1-caf769ca7cea', 'hanifkumara', '', '$2a$10$NHPp7tOMwKcztvLT.TsIPergnZkQBfMU4zKRujI1mLnOYdUWdYcrq', '2022-03-13 07:24:07', '2022-03-13 07:24:07', NULL),
('e88076dc-3ae1-45d0-8e1d-71b035cb2e64', 'hasnifkumara', '', '$2a$10$Qou7WPqDSaI7ERbCXhbMkO1XZq7oA.Za5uGNLLBuluJAcvQmFm.n6', '2022-03-13 07:23:54', '2022-03-13 07:23:54', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `incoming_stocks`
--

CREATE TABLE `incoming_stocks` (
  `id` varchar(64) NOT NULL,
  `businessId` varchar(64) NOT NULL,
  `outletId` varchar(64) NOT NULL,
  `code` varchar(191) NOT NULL,
  `notes` text DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `incoming_stocks`
--

INSERT INTO `incoming_stocks` (`id`, `businessId`, `outletId`, `code`, `notes`, `date`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('04064320-5705-433b-be8b-8c2f4fb41441', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_06UN', '', '2022-03-13 18:34:37', '2022-03-12 18:34:46', '2022-03-12 18:34:48', NULL),
('19f0c73b-6ddf-400e-9bbc-84193a78ebb0', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_uZrB', '', '2022-03-12 19:33:23', '2022-03-12 19:33:32', '2022-03-12 19:33:32', NULL),
('2e9cae01-9267-497d-b186-8713afe0ca80', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_fZaK', '', '2022-03-15 04:01:42', '2022-03-13 04:02:17', '2022-03-13 04:02:18', NULL),
('5186ea3d-9cd5-42b1-ab53-2f7e55c97c67', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_Ge69', 'Test Test', '2022-03-23 04:19:28', '2022-03-13 04:19:51', '2022-03-13 04:19:51', NULL),
('5be54c4a-85b0-4990-b6da-2839359af9fa', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_m5gz', '', '2022-03-13 11:10:24', '2022-03-13 11:10:34', '2022-03-13 11:10:34', NULL),
('8613f156-4a89-4ba2-8902-b0726dbfd70f', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_VxnJ', 'Bismillah', '0000-00-00 00:00:00', '2022-03-12 18:32:46', '2022-03-12 18:32:48', NULL),
('8a025cc6-2823-4f95-8e63-2a3e3a2df327', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_cz39', 'Test Lagi', '2022-03-02 04:18:56', '2022-03-13 04:19:20', '2022-03-13 04:19:21', NULL),
('9beb8d33-5c11-4e8a-9ee8-7f9c009ff3f0', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'INC_7pzR', '', '2022-03-14 02:28:39', '2022-03-14 02:29:03', '2022-03-14 02:29:04', NULL),
('9c51a5a1-269a-415d-baf1-763278de23ff', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_8G0N', '', '2022-03-13 11:05:37', '2022-03-13 11:05:49', '2022-03-13 11:05:50', NULL),
('bf552693-e56e-4cbd-b509-0c7f336989ba', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_2eGn', '', '2022-03-14 04:20:45', '2022-03-13 04:20:53', '2022-03-13 04:20:54', NULL),
('cde79586-0c26-499a-a223-80d3850a0ece', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_6e1n', '', '2022-03-12 19:42:49', '2022-03-12 19:43:15', '2022-03-12 19:43:16', NULL),
('e18e9596-d0b9-4a99-9363-05ade6368bf5', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'INC_bkxc', '', '2022-03-13 07:06:13', '2022-03-13 07:06:19', '2022-03-13 07:06:19', NULL),
('ff731d5c-c930-48b7-ab3d-e93a685fc1b1', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'INC_ToDj', '', '2022-03-14 02:23:50', '2022-03-14 02:24:09', '2022-03-14 02:24:09', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `incoming_stock_products`
--

CREATE TABLE `incoming_stock_products` (
  `id` varchar(64) NOT NULL,
  `productId` varchar(64) NOT NULL,
  `incomingStockId` varchar(64) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `expiredDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `incoming_stock_products`
--

INSERT INTO `incoming_stock_products` (`id`, `productId`, `incomingStockId`, `quantity`, `expiredDate`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('06eb0994-1f4c-456c-bd54-8778d4e009df', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '04064320-5705-433b-be8b-8c2f4fb41441', 1, '2022-04-08 18:12:31', '2022-03-12 18:34:49', '2022-03-12 18:34:49', NULL),
('0d45a7f8-fb79-45ea-9b03-dfeb7e8a4761', '35f8c7fb-1c45-4e2f-b899-16cc5489bb68', '9c51a5a1-269a-415d-baf1-763278de23ff', 5, '2022-03-16 11:05:03', '2022-03-13 11:05:50', '2022-03-13 11:05:50', NULL),
('2ebfef08-34f6-40b1-b63e-7e426317eb82', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '5186ea3d-9cd5-42b1-ab53-2f7e55c97c67', 10, '2022-04-15 18:12:31', '2022-03-13 04:19:51', '2022-03-13 04:19:51', NULL),
('363f0443-6bb0-4cd9-9484-783e6460557c', 'e896e48b-3930-4dc4-ac1c-693d2d2b392a', '9beb8d33-5c11-4e8a-9ee8-7f9c009ff3f0', 20, NULL, '2022-03-14 02:29:04', '2022-03-14 02:29:04', NULL),
('380769d6-d204-4030-8e67-4d63d733a63c', 'd437c246-8449-4cfc-9906-6120434ed39a', '8a025cc6-2823-4f95-8e63-2a3e3a2df327', 2, '2022-03-22 18:55:29', '2022-03-13 04:19:21', '2022-03-13 04:19:21', NULL),
('3959c43a-2388-4a8a-b317-de21c079c6ba', 'd437c246-8449-4cfc-9906-6120434ed39a', '19f0c73b-6ddf-400e-9bbc-84193a78ebb0', 20, '2022-03-22 18:55:29', '2022-03-12 19:33:32', '2022-03-12 19:33:32', NULL),
('828f3406-bbd1-48e9-bcb3-dde37c0466ca', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', 'bf552693-e56e-4cbd-b509-0c7f336989ba', 1, '2022-04-08 18:12:31', '2022-03-13 04:20:54', '2022-03-13 04:20:54', NULL),
('a1bb7dfa-dfcc-4464-8811-dae42a26c507', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', 'cde79586-0c26-499a-a223-80d3850a0ece', 16, '2022-04-29 18:12:31', '2022-03-12 19:43:17', '2022-03-12 19:43:17', NULL),
('ca7c7fc7-a485-4d79-9b3d-3cccee1998ea', '9823beec-eb60-43ca-bb06-71a9dc3d6f82', '5be54c4a-85b0-4990-b6da-2839359af9fa', 5, '2022-03-15 11:10:08', '2022-03-13 11:10:35', '2022-03-13 11:10:35', NULL),
('d466fc21-7f4d-488d-8d79-d6d8b8dc6f0b', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '2e9cae01-9267-497d-b186-8713afe0ca80', 1, '2022-05-28 18:12:31', '2022-03-13 04:02:18', '2022-03-13 04:02:18', NULL),
('db4cc86d-af29-4881-a475-900e02e79bca', 'd437c246-8449-4cfc-9906-6120434ed39a', '2e9cae01-9267-497d-b186-8713afe0ca80', 2, '2022-05-29 18:55:29', '2022-03-13 04:02:20', '2022-03-13 04:02:20', NULL),
('f44239e1-7db9-41e5-8c29-198d43d267c9', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '8613f156-4a89-4ba2-8902-b0726dbfd70f', 27, '0000-00-00 00:00:00', '2022-03-12 18:32:49', '2022-03-12 18:32:49', NULL),
('f793230b-652a-4aee-b26c-7c1ae2abb699', 'd114a843-e466-4b87-be30-bb070c4e8efc', 'ff731d5c-c930-48b7-ab3d-e93a685fc1b1', 20, NULL, '2022-03-14 02:24:09', '2022-03-14 02:24:09', NULL),
('ffe20584-0fdc-4a91-b99d-2a51b83c4e21', '17535562-1533-4d42-8a6f-3318268bbff1', 'e18e9596-d0b9-4a99-9363-05ade6368bf5', 50, NULL, '2022-03-13 07:06:20', '2022-03-13 07:06:20', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `outcoming_stocks`
--

CREATE TABLE `outcoming_stocks` (
  `id` varchar(64) NOT NULL,
  `businessId` varchar(64) NOT NULL,
  `outletId` varchar(64) NOT NULL,
  `code` varchar(191) NOT NULL,
  `notes` text DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `outcoming_stocks`
--

INSERT INTO `outcoming_stocks` (`id`, `businessId`, `outletId`, `code`, `notes`, `date`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('4cdf32f1-27a0-4fad-a508-a7adb914dd83', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'OUT_Yqnr', 'Penguasa penguasa', '2022-03-16 05:53:40', '2022-03-13 05:54:00', '2022-03-13 05:54:01', NULL),
('df307af2-7573-4054-ac20-94d2d0df0697', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'OUT_Em3S', 'Test Note Outcoming Stock', '2022-03-15 05:35:35', '2022-03-13 05:37:52', '2022-03-13 05:37:52', NULL),
('f7ce89d8-7da2-4376-8ad6-708b49ed2af0', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'OUT_KQMU', '', '2022-03-13 06:50:25', '2022-03-13 06:50:55', '2022-03-13 06:50:55', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `outcoming_stock_products`
--

CREATE TABLE `outcoming_stock_products` (
  `id` varchar(64) NOT NULL,
  `stockId` varchar(64) NOT NULL,
  `outcomingStockId` varchar(64) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `outcoming_stock_products`
--

INSERT INTO `outcoming_stock_products` (`id`, `stockId`, `outcomingStockId`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('2b32fa11-17c6-4052-9dba-d2da3cd4faab', '52774288-2e35-4b07-a91c-de6b7220e353', '4cdf32f1-27a0-4fad-a508-a7adb914dd83', 16, '2022-03-13 05:54:02', '2022-03-13 05:54:02', NULL),
('677f7030-af5e-4d4b-992e-9a1447ddb1e5', 'f81ec178-912d-4bf1-85e1-98931a70bd22', 'f7ce89d8-7da2-4376-8ad6-708b49ed2af0', 2, '2022-03-13 06:50:55', '2022-03-13 06:50:55', NULL),
('73bd7dcb-e46b-40dc-955c-ecde8b0f0b21', '3cfcd719-34a7-4b2c-adbd-09b06ff9159d', 'df307af2-7573-4054-ac20-94d2d0df0697', 1, '2022-03-13 05:37:52', '2022-03-13 05:37:52', NULL),
('88ff4503-3eca-4a9e-a56b-714d3fcd9999', 'fc222694-6b2c-4fba-8713-131c4818a351', 'f7ce89d8-7da2-4376-8ad6-708b49ed2af0', 31, '2022-03-13 06:50:55', '2022-03-13 06:50:55', NULL),
('c233adb8-cbbd-4f50-9bf5-222b1c1b0fcb', '3cfcd719-34a7-4b2c-adbd-09b06ff9159d', 'f7ce89d8-7da2-4376-8ad6-708b49ed2af0', 1, '2022-03-13 06:50:55', '2022-03-13 06:50:55', NULL),
('dc63d583-8a32-4541-8446-60c15ae4e618', '1f1ce5e2-b505-43f6-9036-d3102a5b75f6', 'df307af2-7573-4054-ac20-94d2d0df0697', 9, '2022-03-13 05:37:52', '2022-03-13 05:37:52', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `outlets`
--

CREATE TABLE `outlets` (
  `id` varchar(64) NOT NULL,
  `businessId` varchar(64) NOT NULL,
  `name` varchar(191) NOT NULL,
  `address` text NOT NULL,
  `phoneNumber` varchar(191) NOT NULL,
  `image` varchar(199) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `outlets`
--

INSERT INTO `outlets` (`id`, `businessId`, `name`, `address`, `phoneNumber`, `image`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('41aaebe0-aed6-4705-9598-43443ad4d99e', 'e9a66532-49d6-446e-b21c-c6dcca1a91d1', 'Toko Jaya', 'Sukoharjo, Sukoharjo Solo, Jawa Tengah', '089653478467', 'image-1647157167027-509070594.jpg', 1, '2022-03-13 07:39:27', '2022-03-13 07:39:27', NULL),
('e6dcf699-184a-4629-b4f1-ef46c98d0a91', 'e9a66532-49d6-446e-b21c-c6dcca1a91d1', 'Pet Shop', 'Green Lake City, Cipondoh, KOTA Tangerang', '081111111111', 'image-1647227158904-103949103.jpg', 1, '2022-03-14 03:05:58', '2022-03-14 03:05:58', NULL),
('eca052d9-3cbc-4a23-8d77-f703834536d0', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'Outlet 1 Lasting', 'Jalan Bengawan Solo No. 22 Sukoharjo Sukoharjo Solo', '0896123123123', NULL, 1, '2022-03-12 16:58:52', '2022-03-12 17:19:18', NULL),
('f380a682-5317-49f0-a447-c9fe95dbdc5a', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'Toko Sederhana', 'Petir, Cipondoh, KOTA Tangerang, Banten ', '081234567821', 'image-1647227739345-552263442.jpg', 1, '2022-03-13 11:34:15', '2022-03-14 03:15:40', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `owners`
--

CREATE TABLE `owners` (
  `id` varchar(64) NOT NULL,
  `userId` varchar(64) NOT NULL,
  `businessId` varchar(64) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `verify` tinyint(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` varchar(64) NOT NULL,
  `businessId` varchar(64) NOT NULL,
  `outletId` varchar(64) NOT NULL,
  `name` varchar(191) NOT NULL,
  `productCategoryId` varchar(64) NOT NULL,
  `price` double NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `stockStarting` int(11) DEFAULT NULL,
  `image` varchar(199) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `expiredDate` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `businessId`, `outletId`, `name`, `productCategoryId`, `price`, `stock`, `stockStarting`, `image`, `description`, `expiredDate`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('17535562-1533-4d42-8a6f-3318268bbff1', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'Sate Usus', '1d968b5d-1bfd-4af8-9837-decfe632e202', 2000, 196, 100, 'image-1647185592687-532237702.jpg', '', NULL, 1, '2022-03-13 07:04:42', '2022-03-13 16:13:32', NULL),
('35f8c7fb-1c45-4e2f-b899-16cc5489bb68', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'Sprite', 'fae61e56-7576-43e1-bac4-8be45c3ec9ce', 1000, 2, 20, NULL, '', '2022-03-15 11:05:03', 1, '2022-03-13 11:05:34', '2022-03-13 16:13:33', NULL),
('862fd6e8-7317-42fe-b6ca-e3056e1fbfae', 'e9a66532-49d6-446e-b21c-c6dcca1a91d1', '41aaebe0-aed6-4705-9598-43443ad4d99e', 'Palu', '5d828287-1274-4fe5-bfcb-e7d32b08ee4e', 30000, 100, 100, 'image-1647157215794-394450680.jpg', '', NULL, 1, '2022-03-13 07:40:15', '2022-03-13 07:40:15', NULL),
('9823beec-eb60-43ca-bb06-71a9dc3d6f82', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'Fanta', 'fae61e56-7576-43e1-bac4-8be45c3ec9ce', 1000, 2, 10, NULL, '', '2022-03-14 11:10:08', 1, '2022-03-13 11:10:20', '2022-03-13 15:36:56', NULL),
('d114a843-e466-4b87-be30-bb070c4e8efc', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'Raket Yonex', 'a1b3538c-ad12-4905-8866-a4aeee854d92', 170000, 114, 100, 'image-1647171396864-939325424.jpg', '', NULL, 1, '2022-03-13 11:36:36', '2022-03-14 03:27:31', NULL),
('d437c246-8449-4cfc-9906-6120434ed39a', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'Ela Ela Ela', '1d968b5d-1bfd-4af8-9837-decfe632e202', 25000, 71, 50, NULL, '', '2022-03-22 18:55:29', 1, '2022-03-12 18:56:01', '2022-03-13 06:59:04', NULL),
('d53dd8d4-d4e8-46c4-9ac5-202007949964', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'Big Cola', 'fae61e56-7576-43e1-bac4-8be45c3ec9ce', 17000, 100, 100, NULL, '', '2022-04-08 18:12:31', 1, '2022-03-12 18:12:56', '2022-03-13 06:50:55', NULL),
('e896e48b-3930-4dc4-ac1c-693d2d2b392a', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'Snowman v-5', 'a1b3538c-ad12-4905-8866-a4aeee854d92', 2000, 27, 10, 'image-1647224915577-68442158.jpg', '', NULL, 1, '2022-03-14 02:28:35', '2022-03-14 02:36:18', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_categories`
--

CREATE TABLE `product_categories` (
  `id` varchar(64) NOT NULL,
  `businessId` varchar(64) NOT NULL,
  `name` varchar(199) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product_categories`
--

INSERT INTO `product_categories` (`id`, `businessId`, `name`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('1d968b5d-1bfd-4af8-9837-decfe632e202', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'Makanan', 1, '2022-03-12 15:10:23', '2022-03-13 15:32:42', NULL),
('5d828287-1274-4fe5-bfcb-e7d32b08ee4e', 'e9a66532-49d6-446e-b21c-c6dcca1a91d1', 'Material', 1, '2022-03-13 07:39:35', '2022-03-13 07:39:35', NULL),
('a1b3538c-ad12-4905-8866-a4aeee854d92', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'Alat', 1, '2022-03-13 11:36:14', '2022-03-13 11:36:14', NULL),
('fae61e56-7576-43e1-bac4-8be45c3ec9ce', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'Minuman', 1, '2022-03-12 16:57:31', '2022-03-12 16:58:16', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `stocks`
--

CREATE TABLE `stocks` (
  `id` varchar(64) NOT NULL,
  `businessId` varchar(64) NOT NULL,
  `outletId` varchar(64) NOT NULL,
  `productId` varchar(64) NOT NULL,
  `incomingStockId` varchar(64) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `isInitial` tinyint(4) NOT NULL DEFAULT 0,
  `expiredDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `stocks`
--

INSERT INTO `stocks` (`id`, `businessId`, `outletId`, `productId`, `incomingStockId`, `stock`, `isInitial`, `expiredDate`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('10759d9f-9c58-4aa9-9d38-ef0f601bf521', 'e9a66532-49d6-446e-b21c-c6dcca1a91d1', '41aaebe0-aed6-4705-9598-43443ad4d99e', '862fd6e8-7317-42fe-b6ca-e3056e1fbfae', NULL, 100, 1, NULL, '2022-03-13 07:40:16', '2022-03-13 07:40:16', NULL),
('1f1b6c87-d2f6-447e-b3d4-48adcc9badd7', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '8613f156-4a89-4ba2-8902-b0726dbfd70f', 27, 0, NULL, '2022-03-12 18:32:49', '2022-03-12 18:32:49', NULL),
('1f1ce5e2-b505-43f6-9036-d3102a5b75f6', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '5186ea3d-9cd5-42b1-ab53-2f7e55c97c67', 1, 0, '2022-04-15 18:12:31', '2022-03-13 04:19:51', '2022-03-13 05:37:52', NULL),
('221d6800-d714-4e32-a278-f21217915c93', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'e896e48b-3930-4dc4-ac1c-693d2d2b392a', '9beb8d33-5c11-4e8a-9ee8-7f9c009ff3f0', 17, 0, NULL, '2022-03-14 02:29:05', '2022-03-14 02:36:17', NULL),
('3a519d0e-02e4-4a43-8e26-9aa27eeacd10', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'd114a843-e466-4b87-be30-bb070c4e8efc', 'ff731d5c-c930-48b7-ab3d-e93a685fc1b1', 19, 0, NULL, '2022-03-14 02:24:09', '2022-03-14 03:27:30', NULL),
('3c0b0b4f-fa61-4550-b7a8-eeee18bb0946', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '04064320-5705-433b-be8b-8c2f4fb41441', 1, 0, '2022-04-08 18:12:31', '2022-03-12 18:34:49', '2022-03-12 18:34:49', NULL),
('3cfcd719-34a7-4b2c-adbd-09b06ff9159d', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd437c246-8449-4cfc-9906-6120434ed39a', '8a025cc6-2823-4f95-8e63-2a3e3a2df327', 0, 0, '2022-03-22 18:55:29', '2022-03-13 04:19:21', '2022-03-13 06:50:55', NULL),
('4feb2c0b-aa71-462c-828a-49e3ccad1843', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'd114a843-e466-4b87-be30-bb070c4e8efc', NULL, 95, 1, NULL, '2022-03-13 11:36:38', '2022-03-13 16:17:43', NULL),
('52774288-2e35-4b07-a91c-de6b7220e353', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', 'cde79586-0c26-499a-a223-80d3850a0ece', 0, 0, '2022-04-29 18:12:31', '2022-03-12 19:43:17', '2022-03-13 05:54:02', NULL),
('7679f714-83f9-4f33-9b73-ffa14b2e591b', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', '17535562-1533-4d42-8a6f-3318268bbff1', NULL, 196, 1, NULL, '2022-03-13 07:04:42', '2022-03-13 16:13:31', NULL),
('82c4e0cc-6546-41c3-ae84-796d11aedb67', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', 'e896e48b-3930-4dc4-ac1c-693d2d2b392a', NULL, 10, 1, NULL, '2022-03-14 02:28:36', '2022-03-14 02:28:36', NULL),
('88c686f3-4644-4540-96e8-bb112fb73baf', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd437c246-8449-4cfc-9906-6120434ed39a', '19f0c73b-6ddf-400e-9bbc-84193a78ebb0', 20, 0, '2022-03-22 18:55:29', '2022-03-12 19:33:32', '2022-03-12 19:33:32', NULL),
('93aeca8c-de4e-4186-bf04-a0b27f1d788e', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', '9823beec-eb60-43ca-bb06-71a9dc3d6f82', '5be54c4a-85b0-4990-b6da-2839359af9fa', 2, 0, '2022-03-15 11:10:08', '2022-03-13 11:10:35', '2022-03-13 15:36:56', NULL),
('a0e56e60-b881-463b-94fd-ab5f2c86a9c5', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', '17535562-1533-4d42-8a6f-3318268bbff1', 'e18e9596-d0b9-4a99-9363-05ade6368bf5', 50, 0, NULL, '2022-03-13 07:06:20', '2022-03-13 07:06:20', NULL),
('a6ca4361-d8de-48b6-9359-277f97178f42', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', '9823beec-eb60-43ca-bb06-71a9dc3d6f82', NULL, 0, 1, '2022-03-14 11:10:08', '2022-03-13 11:10:22', '2022-03-13 11:13:30', NULL),
('aaf82f49-f501-4dc1-9950-3351d2f9c7bd', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', '35f8c7fb-1c45-4e2f-b899-16cc5489bb68', '9c51a5a1-269a-415d-baf1-763278de23ff', -12, 0, '2022-03-16 11:05:03', '2022-03-13 11:05:51', '2022-03-13 11:09:03', NULL),
('b7c31250-3dd9-4b46-9035-db2780b6a636', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', 'bf552693-e56e-4cbd-b509-0c7f336989ba', 1, 0, '2022-04-08 18:12:31', '2022-03-13 04:20:54', '2022-03-13 04:20:54', NULL),
('d419fa0b-1496-4d3a-84f8-627d3070c2ef', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', '2e9cae01-9267-497d-b186-8713afe0ca80', 1, 0, '2022-05-28 18:12:31', '2022-03-13 04:02:19', '2022-03-13 04:02:19', NULL),
('da83fa16-26ef-48b4-be02-215da4805bae', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', '35f8c7fb-1c45-4e2f-b899-16cc5489bb68', NULL, 0, 1, '2022-03-15 11:05:03', '2022-03-13 11:05:35', '2022-03-13 11:08:21', NULL),
('ecaff9bc-1c14-41d7-b632-f9f95c107cfb', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd437c246-8449-4cfc-9906-6120434ed39a', NULL, 71, 1, '2022-03-22 18:55:29', '2022-03-12 18:56:03', '2022-03-13 06:59:04', NULL),
('f81ec178-912d-4bf1-85e1-98931a70bd22', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd437c246-8449-4cfc-9906-6120434ed39a', '2e9cae01-9267-497d-b186-8713afe0ca80', 0, 0, '2022-05-29 18:55:29', '2022-03-13 04:02:20', '2022-03-13 06:50:55', NULL),
('fc222694-6b2c-4fba-8713-131c4818a351', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', 'd53dd8d4-d4e8-46c4-9ac5-202007949964', NULL, 97, 1, '2022-04-08 18:12:31', '2022-03-12 18:12:58', '2022-03-13 06:50:55', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` varchar(64) NOT NULL,
  `businessId` varchar(64) DEFAULT NULL,
  `outletId` varchar(64) DEFAULT NULL,
  `customerId` varchar(64) DEFAULT NULL,
  `receiptNumber` varchar(191) NOT NULL,
  `totalPayment` double DEFAULT NULL,
  `status` char(10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `businessId`, `outletId`, `customerId`, `receiptNumber`, `totalPayment`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('16b84dda-c78c-4e55-a630-5226b62b7590', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', '227fdd92-7e33-4866-93a1-caf769ca7cea', 'Receipt_13/03/22:11:01:04', 391000, 'done', '2022-03-13 16:01:04', '2022-03-13 16:01:05', NULL),
('663e88cb-b466-4950-919d-e9c5d4220b7d', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', '227fdd92-7e33-4866-93a1-caf769ca7cea', 'Receipt_14/03/22:09:36:15', 6900, 'done', '2022-03-14 02:36:15', '2022-03-14 02:36:18', NULL),
('a830d1c7-7eaa-434c-a73f-339aab923457', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', '227fdd92-7e33-4866-93a1-caf769ca7cea', 'Receipt_13/03/22:11:17:41', 586500, 'done', '2022-03-13 16:17:41', '2022-03-13 16:17:43', NULL),
('ce231160-83de-48f2-b5aa-c475290ed39a', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'f380a682-5317-49f0-a447-c9fe95dbdc5a', '227fdd92-7e33-4866-93a1-caf769ca7cea', 'Receipt_14/03/22:10:27:28', 195500, 'done', '2022-03-14 03:27:28', '2022-03-14 03:27:31', NULL),
('f1effdb8-878d-45b8-9f74-0ad11074b435', '4037b560-5fa6-4855-9680-b40bf9e3e311', 'eca052d9-3cbc-4a23-8d77-f703834536d0', '227fdd92-7e33-4866-93a1-caf769ca7cea', 'Receipt_13/03/22:11:13:30', 5750, 'done', '2022-03-13 16:13:30', '2022-03-13 16:13:33', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction_items`
--

CREATE TABLE `transaction_items` (
  `id` varchar(64) NOT NULL,
  `transactionId` varchar(64) NOT NULL,
  `productId` varchar(64) NOT NULL,
  `quantity` int(11) NOT NULL,
  `priceProduct` double NOT NULL,
  `status` char(10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transaction_items`
--

INSERT INTO `transaction_items` (`id`, `transactionId`, `productId`, `quantity`, `priceProduct`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('31e70cee-53c0-4055-9537-d68c1c58d794', 'f1effdb8-878d-45b8-9f74-0ad11074b435', '17535562-1533-4d42-8a6f-3318268bbff1', 2, 2000, '', '2022-03-13 16:13:30', '2022-03-13 16:13:30', NULL),
('5dd1c976-6421-40bd-aff2-a316596afbe7', 'f1effdb8-878d-45b8-9f74-0ad11074b435', '35f8c7fb-1c45-4e2f-b899-16cc5489bb68', 1, 1000, '', '2022-03-13 16:13:32', '2022-03-13 16:13:32', NULL),
('879844ea-9b90-4b4f-807f-46a5ef452fb6', 'a830d1c7-7eaa-434c-a73f-339aab923457', 'd114a843-e466-4b87-be30-bb070c4e8efc', 3, 170000, '', '2022-03-13 16:17:42', '2022-03-13 16:17:42', NULL),
('964dbc6c-0a61-41b3-9c6e-d63a5fced45a', '16b84dda-c78c-4e55-a630-5226b62b7590', 'd114a843-e466-4b87-be30-bb070c4e8efc', 2, 170000, '', '2022-03-13 16:01:04', '2022-03-13 16:01:04', NULL),
('9c6b6c61-c8c4-4c6e-9df8-37a00cb34373', 'ce231160-83de-48f2-b5aa-c475290ed39a', 'd114a843-e466-4b87-be30-bb070c4e8efc', 1, 170000, '', '2022-03-14 03:27:28', '2022-03-14 03:27:28', NULL),
('df0fdcdd-c2da-4669-8987-360d2164f47b', '663e88cb-b466-4950-919d-e9c5d4220b7d', 'e896e48b-3930-4dc4-ac1c-693d2d2b392a', 3, 2000, '', '2022-03-14 02:36:16', '2022-03-14 02:36:16', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `fullName` varchar(191) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(225) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `businesses`
--
ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ownerId` (`businessAccountId`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `business_accounts`
--
ALTER TABLE `business_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `incoming_stocks`
--
ALTER TABLE `incoming_stocks`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `incoming_stock_products`
--
ALTER TABLE `incoming_stock_products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `outcoming_stocks`
--
ALTER TABLE `outcoming_stocks`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `outcoming_stock_products`
--
ALTER TABLE `outcoming_stock_products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `outlets`
--
ALTER TABLE `outlets`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaction_items`
--
ALTER TABLE `transaction_items`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `businesses`
--
ALTER TABLE `businesses`
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

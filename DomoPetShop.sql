-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: domopetshop
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `cart_item_id` int(11) NOT NULL,
  `carts_item_id` int(11) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`),
  KEY `FK75l19ikft4qjn1wh2q9cpo2qf` (`carts_item_id`),
  KEY `FKlq0aq43w2d0sdg96vdkwv6bjf` (`user_email`),
  CONSTRAINT `FK75l19ikft4qjn1wh2q9cpo2qf` FOREIGN KEY (`carts_item_id`) REFERENCES `item` (`item_id`),
  CONSTRAINT `FKlq0aq43w2d0sdg96vdkwv6bjf` FOREIGN KEY (`user_email`) REFERENCES `user` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item_seq`
--

DROP TABLE IF EXISTS `cart_item_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item_seq`
--

LOCK TABLES `cart_item_seq` WRITE;
/*!40000 ALTER TABLE `cart_item_seq` DISABLE KEYS */;
INSERT INTO `cart_item_seq` VALUES (1);
/*!40000 ALTER TABLE `cart_item_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourite_item`
--

DROP TABLE IF EXISTS `favourite_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourite_item` (
  `id` int(11) NOT NULL,
  `fav_item_id` int(11) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKav0dnmcinsce3cgodh2jhj4` (`fav_item_id`),
  KEY `FKj3l28uyyxtidh3r9svftojglj` (`user_email`),
  CONSTRAINT `FKav0dnmcinsce3cgodh2jhj4` FOREIGN KEY (`fav_item_id`) REFERENCES `item` (`item_id`),
  CONSTRAINT `FKj3l28uyyxtidh3r9svftojglj` FOREIGN KEY (`user_email`) REFERENCES `user` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourite_item`
--

LOCK TABLES `favourite_item` WRITE;
/*!40000 ALTER TABLE `favourite_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `favourite_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourite_item_seq`
--

DROP TABLE IF EXISTS `favourite_item_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourite_item_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourite_item_seq`
--

LOCK TABLES `favourite_item_seq` WRITE;
/*!40000 ALTER TABLE `favourite_item_seq` DISABLE KEYS */;
INSERT INTO `favourite_item_seq` VALUES (1);
/*!40000 ALTER TABLE `favourite_item_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  `item_image` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_price` double NOT NULL,
  `item_category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `FKasph99xmslm0pmfyyc8ga2iyr` (`item_category_id`),
  CONSTRAINT `FKasph99xmslm0pmfyyc8ga2iyr` FOREIGN KEY (`item_category_id`) REFERENCES `item_category` (`item_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Dog','Dog 1 description','dog1.jpg','Dog 1',2000,1),(2,'Dog','Dog 2 description','dog2.jpg','Dog 2',2000,1),(3,'Dog','Dog 3 description','dog3.jpg','Dog 3',2000,1),(4,'Dog','Dog 4 description','dog4.jpg','Dog 4',2000,1),(5,'Cat','Cat 1 description','cat1.jpg','Cat 1',2000,2),(6,'Cat','Cat 2 description','cat2.jpg','Cat 2',2000,2),(7,'Cat','Cat 3 description','cat3.jpg','Cat 3',2000,2),(8,'Cat','Cat 4 description','cat4.jpg','Cat 4',2000,2),(9,'Fish','Fish 1 description','fish1.jpg','Fish 1',2000,3),(10,'Fish','Fish 2 description','fish2.jpg','Fish 2',2000,3),(11,'Fish','Fish 3 description','fish3.jpg','Fish 3',2000,3),(12,'Fish','Fish 4 description','fish4.jpg','Fish 4',2000,3),(13,'Bird','Bird 1 description','bird1.jpg','Bird 1',2000,4),(14,'Bird','Bird 2 description','bird2.jpg','Bird 2',2000,4),(15,'Bird','Bird 3 description','bird3.jpg','Bird 3',2000,4),(16,'Bird','Bird 4 description','bird4.jpg','Bird 4',2000,4),(17,'DogFood','Dog Food 1 description','dogFood1.jfif','Dog Food 1',2000,1),(18,'DogFood','Dog Food 2 description','dogFood2.jfif','Dog Food 2',2000,1),(19,'DogFood','Dog Food 3 description','dogFood3.jfif','Dog Food 3',2000,1),(20,'DogFood','Dog Food 4 description','dogFood1.jfif','Dog Food 4',2000,1),(21,'CatFood','Cat Food 1 description','catFood1.jfif','Cat Food 1',2000,2),(22,'CatFood','Cat Food 2 description','catFood2.jfif','Cat Food 2',2000,2),(23,'CatFood','Cat Food 3 description','catFood3.jfif','Cat Food 3',2000,2),(24,'CatFood','Cat Food 4 description','catFood1.jfif','Cat Food 4',2000,2),(25,'FishFood','Fish Food 1 description','fishFood1.jfif','Fish Food 1',2000,3),(26,'FishFood','Fish Food 2 description','fishFood2.jfif','Fish Food 2',2000,3),(27,'FishFood','Fish Food 3 description','fishFood3.jfif','Fish Food 3',2000,3),(28,'FishFood','Fish Food 4 description','fishFood1.jfif','Fish Food 4',2000,3),(29,'BirdFood','Bird Food 1 description','birdFood1.jfif','Bird Food 1',2000,4),(30,'BirdFood','Bird Food 2 description','birdFood2.jfif','Bird Food 2',2000,4),(31,'BirdFood','Bird Food 3 description','birdFood3.jfif','Bird Food 3',2000,4),(32,'BirdFood','Bird Food 4 description','birdFood1.jfif','Bird Food 4',2000,4),(33,'Dog Accessories','Dog Accessories 1 description','dogItem1.jfif','Dog Accessories 1',2000,1),(34,'Dog Accessories','Dog Accessories 2 description','dogItem2.jfif','Dog Accessories 2',2000,1),(35,'Dog Accessories','Dog Accessories 3 description','dogItem3.jfif','Dog Accessories 3',2000,1),(36,'Dog Accessories','Dog Accessories 4 description','dogItem1.jfif','Dog Accessories 4',2000,1),(37,'Cat Accessories','Cat Accessories 1 description','catItem1.jfif','Cat Accessories 1',2000,2),(38,'Cat Accessories','Cat Accessories 2 description','catItem2.jfif','Cat Accessories 2',2000,2),(39,'Cat Accessories','Cat Accessories 3 description','catItem3.jfif','Cat Accessories 3',2000,2),(40,'Cat Accessories','Cat Accessories 4 description','catItem1.jfif','Cat Accessories 4',2000,2),(41,'Fish Accessories','Fish Accessories 1 description','fishItem1.jfif','Fish Accessories 1',2000,3),(42,'Fish Accessories','Fish Accessories 2 description','fishItem2.jfif','Fish Accessories 2',2000,3),(43,'Fish Accessories','Fish Accessories 3 description','fishItem3.jfif','Fish Accessories 3',2000,3),(44,'Fish Accessories','Fish Accessories 4 description','fishItem1.jfif','Fish Accessories 4',2000,3),(45,'Bird Accessories','Bird Accessories 1 description','birdItem1.jfif','Bird Accessories 1',2000,4),(46,'Bird Accessories','Bird Accessories 2 description','birdItem2.jfif','Bird Accessories 2',2000,4),(47,'Bird Accessories','Bird Accessories 3 description','birdItem3.jfif','Bird Accessories 3',2000,4),(48,'Bird Accessories','Bird Accessories 4 description','birdItem1.jfif','Bird Accessories 4',2000,4);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_category`
--

DROP TABLE IF EXISTS `item_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_category` (
  `item_category_id` int(11) NOT NULL,
  `item_category_description` varchar(255) DEFAULT NULL,
  `item_category_image` varchar(255) DEFAULT NULL,
  `item_category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`item_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_category`
--

LOCK TABLES `item_category` WRITE;
/*!40000 ALTER TABLE `item_category` DISABLE KEYS */;
INSERT INTO `item_category` VALUES (1,'Dog description','dog.jfif','Dog'),(2,'Cat description','cat.jfif','Cat'),(3,'Fish description','fish.jfif','Fish'),(4,'Bird description','bird.jfif','Bird');
/*!40000 ALTER TABLE `item_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_category_seq`
--

DROP TABLE IF EXISTS `item_category_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_category_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_category_seq`
--

LOCK TABLES `item_category_seq` WRITE;
/*!40000 ALTER TABLE `item_category_seq` DISABLE KEYS */;
INSERT INTO `item_category_seq` VALUES (101);
/*!40000 ALTER TABLE `item_category_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_seq`
--

DROP TABLE IF EXISTS `item_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_seq`
--

LOCK TABLES `item_seq` WRITE;
/*!40000 ALTER TABLE `item_seq` DISABLE KEYS */;
INSERT INTO `item_seq` VALUES (101);
/*!40000 ALTER TABLE `item_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_email` varchar(255) NOT NULL,
  `user_first_name` varchar(255) DEFAULT NULL,
  `user_last_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('anuragu@gmail.com','Anurag','Umarkhede','anurag@1995','ADMIN'),('manishau@gmail.com','Manisha','Umarkhede','manisha@1995','CUSTOMER'),('sanjayu@gmail.com','Sanjay','Umarkhede','sanjay@1995','CUSTOMER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 10:24:39

/*
 Navicat Premium Data Transfer

 Source Server         : MySQL Local
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : geosipa

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 07/08/2023 23:53:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ref_tipe
-- ----------------------------
DROP TABLE IF EXISTS `ref_tipe`;
CREATE TABLE `ref_tipe`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `icon` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ref_tipe
-- ----------------------------
INSERT INTO `ref_tipe` VALUES (1, 'Gedung', 'data:image/png;base64,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');
INSERT INTO `ref_tipe` VALUES (2, 'Dermaga', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAByUlEQVRIx8WWP0vEMBiH+xGcRfFQFEXx3yfoB3BwcBQpuAguoqMOh4ODi+J4SxFcnMTxpgouLtLRsTg7ODnHPiWBNJe0aat3Bz/ursmbJ7+8yZsGQohgnAomBqz7TO8cTOX6ziUM8Sysi28D3J0/uxXbb6KkpesnoP3OwHyQ2HTD4CZw7fFDWFynrIg3MO8c9Y6vxNbLzwjARwvnA6BxE2C8MnhtBUPrz58AsybAhKUieGbvyLZkTgEjjt9NgFX5KeSaiMrz3OEF/zdrgXmnHoMRtHw3LA3GLmWpVW5X79/F4uWDmN0/LfWhjW92tg8wZMNsDL+K5CMG9skbcEDEmselCpgQ5ANxSQOmPsDWIFP6xqkCZmqndREuKXs+wOLQdwXKw9/3PRaZOodd3Onlzau0/ZU73+LdyqXNnS+wlUubO+/7sKlLl7smwJCyRYnDLbPXJwCA6kIbB12Ws75tnBGgVjMzguhELbS9VlBr9fppKJKxkbyIi+dWoF4TmTXCnSrWOFJulSueKccUdlzSxrd+xTmB/yGnQ+VInzWzJHd1OVRXl2pjVdRquByGUrGRt1TLy4meF5nvGy1nifH6GMt9EE7+RXhc+gWb8ZwoZ0icXQAAAABJRU5ErkJggg==');
INSERT INTO `ref_tipe` VALUES (3, 'Parkir', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPoSURBVFiFtZfNT1xVFMB/9828+XrMOAzQlqEDiR+0QAqoi6al1MboQmOCiYu6aEyMkepSV7poJHGh/4FUo7tSE1e6MtHW2KINJqRMgQKlbWakMHwMUxh5897Mm/eeCywWGYZhxjnLc3Lv+d3zce+5AoABW+pxR/uF4Dw2bYCb6kjWhtsILv6md33FgLAEA7bU644O2XC2LezlWNiLzy1VxXsmazG+oDG1oAH25eFs9znR89nYewK+eKe3ge5mhWhMRc9bVQHwyBJdLQo34xt8M5wEOO8E+tvCXrqbFT79fg7DtAh5XVUBSGk5fhhLcaEvQtt9lakFrV8S0N7Z5CMaUzFMi+SGXhXnACuqjmFaROMqx8JegA4n4Pa5BbqxefLHTx8Oyhx/2o/sEFu6vGmzrpnMJDQepHL7AjhSHwBANywUjwTgcRZbcPZEPc11hdPx2rNBJh9oXL6RRM2WXzNFy90ri2JmOg57ef+lg7ic5XdN0Qg8kpmExuCVZQAckqApJNP3XIgnD7hpqnXxYoefH6PrZQHsG920bP5M5vjyl2VWN/IAHH/KX5bzkgEKJSJrWEzMZQAI+hx45fLSUNqqXUrB/ZhT0y7L//5T8EhqFSddLT4AEmsGuTJvz5KK0Cs7iIQ229HhEETqXLzc8cRW2K9Np8tyXjJApM7Fh682FrRF4xlG7m1UF6CQZPMWVyfT/Dyxjl1m/ksGWFw3tsKcN2FNzRNbzWLkK/C8H4A11eTGbPlhrhhgL2kMynhdOxsqsWag5Yp3R8UADknw1uk67i9tfxkDPonYSo4rE8U7pGKAAwEny2mD70ZS2/SH61ycadv7ii56EVn/lHfe2r3YDgZlEg/zO/TLawaHgvKeAEUj8NN4mpOtfn6dKhzG15+v5cQzfmyg90hgh920LT55I8yl4RR3lwpPWkUBRmMqozF1V3uoRmb4Tpo/7qp88MqhbW/D9em/uHYnzdun66mtccJS4T0qqgEjb/HC0QA9rX7c/xlKTrbW0B7x4pBs9NzOFP0vAN+OrBL0O6j3Oxn6fZX5h/92wpl2P50RH1cn04zP7T7oVhgBm9mETiYrE09mWc+YW7Z7i1lCipPZxWzRPZxAVtUtd8DjIKXlWFH1rem1FNltFBuLZxiLZ7bpZpJpGhQPHlkirZsAumTD7fEFja4WBdkh0aB4Sna+X2lQPLgcgu4WhVvzGsCkE8HFqQVt8GZ8gwt9EaJxFd2o3tesu0VhNL7BdEJDIAYFA7Z0yhW9hODNo41eOpuq+zm9Na8xndDAFkPDH3ee25z2bFuc+jz6Lpvf83agWnnQgUmBGLz+UefXCGH/Dcq0dsBAn9k4AAAAAElFTkSuQmCC');
INSERT INTO `ref_tipe` VALUES (4, 'Kendaraan', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQRSURBVFiF7ZZdbFRFFMd/Z+5t793tQmlpadmWUCCkJKZBRWMQ40ciSCXy1CrtC8aYmBDBEmKICQ8kxgi+iMFoeDGpxEqAFzHhwRB9QUChCCggUT5a+Qgb6HZtd7vL7p3jw26LYFMXXEyM/JObyZkzM///zDlz5sJ9/N8hEzl1bXsDuC1YnYGh1qpMBY0ghAXxUJ0CIohNgLGqmkIZARk06CBG+8jZE7J116k7FhC88eKGz+Lm7VgOUhYCFZJWCci3FkgG+elGoMLo2NzJRoC8HS2D12vN6vIPej4sWoB2vfTwN8Pm8NqLmIlOqFi810B2yWSZJ+/3nLvdNy6BYjb3xLUk5ADd17VM1W4ez/cXEl3bsfSXjD57JDlhetwRTqaF3hRtumbF4+MJkJZlnVUL29tDAKq6Yfv10QiWDt0Dgho2ACxsbw+1LOusAkQebO04osoC4OeD83hlKKcHlp0VsiVWIMDOWUqTbx579LR+CjSDHnZBtwErQeaeTOoX0XJ4J6qFTC5iYVEiRWZLtQNHk/plwdyvKt1jLLqmc4Eae5i/qQ0lgAqySLZ8fhD+lIRq7Lv/AjmAKGwaNQyAdq14OqiYvNj64XvObv0wQcWkJ3VN5/MALoAK664vX0m6YTb26iUqL5/Hu/gr3m9ncVLD/4gwCEfIzJhDpnEOiehsTF0DoYvnqN2xtQvY6+rqVk+VpWID4vE4A4kkNbNaqGhZiOsYpu3eht935q7I0zObibW9Ri6wJIeHuRa7ytTyOKEgC/CMbnzZdzGRJsANnTlG6IkX8Hwfz/fpv3Ce6poaypa0Uf/JJr5PGb5KekURr6pMUV0uxJe0MZhIMHDtGtMbG/F8H98PETpyHMBl4MYMFy2ziCVy/CD1oQhTa6PQHyeEwYv14doAjENOlVSRO1cBHBfvSj/1xqEKQ7j/DDVAWe9PRE4cKgwMrOi6zpka2At3dLYlgjimyWCzQ2PK3TJydY0g9+A2GocbzfMJqqfd7LPZIQGwXSsuA9MTr75FrnE2/tH9VOzpHhu3J+Xx8WD+iiZVsEXwraocoTMyMmanFrcxsug5JJOmast6ZCR1xWzZER0tRMcQIZgWBSBX13DLYkOBMKT5rxhygPRtA9UL5VvXRR2XQDkFhTogygFFWyM7t5F94BG8776+ZXK1o0wSZZJT/AtV796qILxvNyYew73Uhxn+nRH0WyiUXl3fXtk76Fx+KET47qKvg4hMqG4op1NURJIBHEoJP+bcuo3bt8fyJ7B5V2J+a8clD+Z6AkkFFWn6YW9P313pGQfzl3bEgNpR282lM1AIQX4TBBkgU9iHBk7JfskKyI7XeVOA8JEqywFE6W+uTPefKCG7qL6pwlMAInK6d9+uRAmXv4//MP4AfliTF+BgT2MAAAAASUVORK5CYII=');
INSERT INTO `ref_tipe` VALUES (5, 'Perlengkapan Fasilitas Jalan', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUFQTFRF/////wAA/0BA/ysr30BA5END6UND7UBA6D4+6kBA6Dw86jw87D4+6jw86z096Tw86j4+6T096jw86zw86j096z096jw86j4+6T096j0920FD6T096j096j09vkxNslBSs1BSxklKx0hK0EZH0UZHplRVp1JV10NEmldbnFdZ6z096j4+aGht3UFB6j09j1peZmht6j096jw84kBA40BAhV5ihV5i6j095z4+fGFlemFl6T09c2NpurzB6j09wMLG6j096T096j096T09a2Zr1dfb6j096j09aGhs6j096j09Zmhtamxxa21ycXN4cnR5dXd8eHp/enyBfH6DfoCFg4WKj5GWkpSZlZecmZugnZ+koKKnrrC1r7G2srS5tri9urzBvL7DvsDFwsTJ0NLX19ne293i3+Hm4+Xq6Orv6j09SceOdQAAAEt0Uk5TAAIEBggTFxwhJDc8QkhYXmNpbn+FipChpqywsbe4v8DAwMDCwsPDx8jIyMvMzc3P0NDT1NTW19je4OHp7Ozs7vDz8/T19vb7/P3+qBvBrQAAAYtJREFUOI11ks+vwUAQx8eWbkeEtEWT90g14REcXuLi5s93kzgJ4fgaoiTiQMWP125321VMmv3OzH52ZzpZAtyw1/8NbDQK134PRZ7EgGZ/B9ZqhautvQL5PZPTick+nwayXcr0cmFCu9kUgM0yU11nUm5iGpiUmGYyTEqTNOBsQQZg6zwD2oA7txvPD7QnAKESOa4baQXwCchPo+aIYUQZfZqXAaXt8bBQ4Ee8tiIB2DnzHtkX2rmDMgBWGrBABuozI67ISxizegLQoRcVBH+z8SNP8YY0BhAOfCwP339w9xDV4IDOs1itihnrCUDaKz4mIJomhl9ZtQkHsLujkP4LoLsuCgD28AoESQF8AX0H0GCDAWoNzHeACTWVAdjgjyWwo+sehV+aNDACwBM5uF+v9zjwgAGZn+Rpg0KpEgcEfjLBgv2kBShaVjEOTOhjCMDUkA5J1xlTCAFLauHpL8ImLCA5G/xPgA92jqAj3utLiWDDQYIwNz/dYM4BiTqerf9iWyyXiyRaz8bqPw/mYDXAUl/xAAAAAElFTkSuQmCC');
INSERT INTO `ref_tipe` VALUES (6, 'Penerangan Jalan Umum', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKCSURBVFiF7ZfNS1RhFMZ/586HkzplUoqGqIEkahJmYIRQRgQSRNAQFRJFtAnaGEEFQlC5aJl/g9IiKDIC+zaxYiBISy1aWIloGiqmQ96572klDOp1ZqyhzTzLcx6e8+Pc917uK+HBGSUxLQDDgrwUibbtLM/ti20+efPjaNTmumNrqWPwqyYWK31D3xxQazVT1GSOO5Jhg+YBfsABbakt39AKyOPeya7IvLMfQESwRBzEIDieuAD69epD0MbV5mPsIim9NdYzNBEM4DupSCtKDiKXpn7+3huZdxotSzSQ6WkPZjvNddvzx7WbAuPwHXCFEOgUHb68G5FuwOviuy3FNy/EFsIDs1WI6QGyRkciXstCA1neIwfqNt2P9TnPaQPOu+TallJvSUnra4QmYG4FxHZ++S8uLe+qCH5AubYInZFh3Vs6HMCK0IzSscLwOYUmaeCtLFZ0+EoBlhxHtQyYQqVTSm70utDz/sts3oJtxkdHIuRuztxWv2P9ZzevPmOPEQ4BOQifLaVD9jHm5k9Y4cGZ2QdPx83fZKx6+uNKiEKib3EqAP6B0gBpgDRAGiAN8N8B4v4yraRjp8/VVFbXVBZuKTkx+PGdPzsYiJRXVhd/GujvTzZL4ltWADh1NgzUAkxPTwNgeT1zj+7eyU42a62PoHBpQY0JrCUoaYBQKOQB8pcDqCcUCvlTDuAJBvNxOTs2voqUA2AvX/+ijEhVygGMRwrceiqUpRxAjPsGULamHsBy3wBqilIOgFHXDajRvGTjEvoQHTwcagE9AyBi5YmwbrE3OTERQwBAFMDn873qfdHVEC/b7T64BNPkolIMoGqIvXk7zrJ7iRfAQjcmEv0HZCPVXpWMa8oAAAAASUVORK5CYII=');

-- ----------------------------
-- Table structure for t_aset
-- ----------------------------
DROP TABLE IF EXISTS `t_aset`;
CREATE TABLE `t_aset`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_tipe` int NULL DEFAULT NULL,
  `no_aset` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `kode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `prov` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `kab` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `kec` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `desa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `tahun` year NULL DEFAULT NULL,
  `sdana` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `fungsi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `jenis` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `kondisi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `kewenangan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `lat` double NULL DEFAULT NULL,
  `long` double NULL DEFAULT NULL,
  `ket` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `gambar` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 124 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_aset
-- ----------------------------
INSERT INTO `t_aset` VALUES (1, 5, '-', 'DNT2', 'Delineator Ruas Jalan Pasar Inpres - Air Dingin', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Memperjelas Lintasan/ Jalur', 'Delineator', '-', '-', '-', 2.469802222, 96.375780833, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (2, 5, '-', 'APIL2', 'Alat Pemberi Isyarat Lalu Lintas SP BSM', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'Pemberi Isyarat Lalu lintas', 'Alat Pemberi Isyarat Lalu Lintas', '-', '-', '-', 2.46582139204, 96.3806908631, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (3, 5, '-', 'APIL1', 'Alat Pemberi Isyarat Lalu Lintas SP Air Dingin', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'Pemberi Isyarat Lalu lintas', 'Alat Pemberi Isyarat Lalu Lintas', '-', '-', '-', 2.45901325689, 96.3784221524, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (4, 5, '-', 'DNT3', 'Delineator Ruas Jalan Pasar Inpres - Air Dingin', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'Memperjelas Lintasan/ Jalur', 'Delineator', '-', '-', '-', 2.4607711061, 96.3767553678, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (5, 5, '-', 'APIL3', 'Alat Pemberi Isyarat Lalu Lintas SP RSUD SIMEULUE', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'Pemberi Isyarat Lalu lintas', 'Alat Pemberi Isyarat Lalu Lintas', '-', '-', '-', 2.46633129325, 96.3769602441, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (6, 5, '-', 'RLL1', 'Peringatan Tikungan Tajam Ke Kiri', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.482864167, 96.374952778, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (7, 5, '-', 'RLL3', 'Wajib Berhenti Sesaat', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Larangan', 'Rambu Larangan', '-', '-', '-', 2.482641667, 96.375162222, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (8, 5, '-', 'RLL4', 'Peringatan Banyak Lalu Lintas Pejalan Kaki  Anak-anak', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.48127944707, 96.3750778414, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (9, 5, '-', 'RLL5', 'Peringatan Persimpangan Tiga Sisi Kiri Dengan Prioritas', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.481079167, 96.375194444, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (10, 5, '-', 'RLL6', 'Peringatan Tikungan Tajam Ke Kiri', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.48081122312, 96.3751552291, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (11, 5, '-', 'RLL7', 'Peringatan Persimpangan Tiga Sisi kanan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.48051570992, 96.3754344382, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (12, 5, '-', 'RLL8', 'Peringatan Tikungan Tajam Ke Kanan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.4804484552, 96.3754650085, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (13, 5, '-', 'APIL4', 'Alat Pemberi Isyarat Lalu lintas SP Waserda', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Pemberi Isyarat Lalu lintas', 'Alat Pemberi Isyarat Lalu Lintas', '-', '-', '-', 2.48049125366, 96.3756545445, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (14, 5, '-', 'RLL9', 'Petunjuk Arah', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Petunjuk', 'Rambu Petunjuk', '-', '-', '-', 2.4804953297, 96.3755791377, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (15, 5, '-', 'RLL10', 'Wajib Berhenti Sesaat', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Larangan', 'Rambu Larangan', '-', '-', '-', 2.47936626551, 96.3759113353, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (16, 5, '-', 'RLL11', 'Peringatan Jembatan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.47948039474, 96.375880765, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (17, 5, '-', 'RLL12', 'Peringatan Jembatan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.476833056, 96.375550833, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (18, 5, '-', 'RLL13', 'Peringatan Jembatan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.47663123997, 96.3754446283, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (19, 5, '-', 'RLL14', 'Peringatan Jembatan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.47411428278, 96.37560767, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (20, 5, '-', 'RLL15', 'Peringatan Tanjakan Landai', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.47166, 96.37558, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (21, 5, '-', 'DNT1', 'Delineator Ruas Jalan Pasar Inpres - Air Dingin', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Memperjelas Lintasan/ Jalur', 'Delineator', '-', '-', '-', 2.471154167, 96.375516389, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (22, 5, '-', 'RLL16', 'Peringatan Tanjakan Landai', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.46833, 96.37639, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (23, 5, '-', 'DNT4', 'Delineator Ruas Jalan Syariah', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Jaya', 0000, '-', 'Memperjelas Lintasan/ Jalur', 'Delineator', '-', '-', '-', 2.4664936111, 96.3787064104, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (24, 5, '-', 'RLL17', 'Peringatan Banyak Tikungan ( Ke Kiri, Ke Kanan, Ke Kiri)', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Jaya', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.46651479266, 96.3785623758, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (25, 5, '-', 'RLL18', 'Lampu Lalu Lintas', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'Peringatan Alat Pemberi Isyarat Lalu Lintas', 'Peringatan Alat Pemberi Isyarat Lalu Lintas', '-', '-', '-', 2.4652, 96.38039, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (26, 5, '-', 'RLL19', 'Larangan Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'Rambu Larangan', 'Rambu Larangan', '-', '-', '-', 2.46375, 96.38024, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (27, 5, '-', 'RLL20', 'Peringatan Yang Ditegaskan Dengan Menggunakan Papan Tambahan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.46283, 96.37994, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (28, 5, '-', 'RLL21', 'Peringatan Jembatan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.46278, 96.37991, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (29, 5, '-', 'RLL22', 'Petunjuk Lokasi Putar Balik', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'Rambu Petunjuk Pengaturan Lalu Lintas', 'Rambu Petunjuk Pengaturan Lalu Lintas', '-', '-', '-', 2.46121, 96.37915, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (30, 5, '-', 'RLL23', 'Peringatan Persimpangan Tiga Sisi Kiri Dengan Prioritas', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'Rambu Peringatan', 'Rambu Peringatan', '-', '-', '-', 2.45944, 96.37861, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (31, 2, '-', '-', 'Dermaga Pulau Siumat', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Pulau Siumat', 2014, 'KPDT', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.64922777844, 96.3712694439, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (32, 2, '-', '-', 'Dermaga SK Karya', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.48191111061, 96.3763583333, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (33, 2, '-', '-', 'Dermaga Kota Batu', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.45736111073, 96.4066944444, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (34, 2, '-', '-', 'Dermaga Malasin', 'Aceh', 'Simeulue', 'Simeulue Barat', 'Malasin', 2013, 'DAK/ DAU', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.83947777808, 95.9121027784, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (35, 2, '-', '-', 'Dermaga Miteum', 'Aceh', 'Simeulue', 'Simeulue Barat', 'Miteum', 2013, 'DAK/ DAU', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.85272222155, 95.9069444443, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (36, 2, '-', '-', 'Dermaga Salur Lasengalu', 'Aceh', 'Simeulue', 'Teupah Barat', 'Salur Lasengalu', 2013, 'DAK/ DAU', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.44070833292, 96.2382444437, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (37, 2, '-', '-', 'Dermaga P. Teupah', 'Aceh', 'Simeulue', 'Teupah Barat', 'Pulau Teupah', 2013, 'DAK/ DAU', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.3623703617, 96.2428638339, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (38, 2, '-', '-', 'Dermaga Busung', 'Aceh', 'Simeulue', 'Teupah Tengah', 'Busung', 0000, '-', 'Barang dan Jasa', '-', '-', '-', 'Dinas Perhubungan Kabupaten Simeulue', 2.38454173122, 96.3342786006, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (39, 3, '-', '-', 'Area Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', '-', 0000, '-', '-', '-', '-', '-', '-', 2.470979, 96.381262, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (40, 3, '-', '-', 'Area Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', '-', 0000, '-', '-', '-', '-', '-', '-', 2.478176, 96.381239, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (41, 3, '-', '-', 'Area Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', '-', 0000, '-', '-', '-', '-', '-', '-', 2.478295, 96.381544, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (42, 3, '-', '-', 'Area Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', '-', 0000, '-', '-', '-', '-', '-', '-', 2.47655, 96.38222, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (43, 3, '-', '-', 'Area Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', '-', 0000, '-', '-', '-', '-', '-', '-', 2.4772215, 96.3822419, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (44, 3, '-', '-', 'Area Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', '-', 0000, '-', '-', '-', '-', '-', '-', 2.480798, 96.376505, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (45, 3, '-', '-', 'Area Parkir', 'Aceh', 'Simeulue', 'Simeulue Timur', '-', 0000, '-', '-', '-', '-', '-', '-', 2.476412, 96.381671, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (46, 1, '-', '-', 'Kantor Dinas Perhubungan Kabupaten Simeulue', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Jaya', 0000, '-', '-', '-', '-', '-', '-', 2.46668874799, 96.3775597223, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (47, 1, '-', '-', 'Terminal Bus Kabupaten Simeulue', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Jaya', 0000, '-', '-', '-', '-', '-', '-', 2.46765376594, 96.3824352926, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (48, 1, '-', '-', 'Gudang Perbekalan', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Jaya', 0000, '-', '-', '-', '-', '-', '-', 2.46832647209, 96.3829140654, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (49, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Suka Karya', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4745, 96.3756, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (50, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Amiria Bahagia', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4662, 96.377, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (51, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4621, 96.3788, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (52, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4618, 96.3788, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (53, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4619, 96.3792, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (54, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4616, 96.379, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (55, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4611, 96.3788, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (56, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4611, 96.3784, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (57, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4614, 96.3787, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (58, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4615, 96.3789, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (59, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4556, 96.3819, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (60, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4564, 96.3885, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (61, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4582, 96.3902, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (62, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4582, 96.3913, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (63, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4581, 96.3924, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (64, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4578, 96.3926, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (65, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4576, 96.3929, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (66, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4574, 96.3932, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (67, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4571, 96.3935, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (68, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4564, 96.3941, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (69, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4553, 96.3957, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (70, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4552, 96.396, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (71, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4551, 96.3964, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (72, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.455, 96.3967, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (73, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4549, 96.397, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (74, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4548, 96.3974, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (75, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Air Dingin', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4546, 96.3977, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (76, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4544, 96.398, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (77, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4541, 96.3983, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (78, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4538, 96.3985, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (79, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4536, 96.3987, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (80, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4533, 96.3989, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (81, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.453, 96.3992, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (82, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4528, 96.3994, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (83, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4526, 96.3997, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (84, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4525, 96.4, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (85, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4523, 96.4004, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (86, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4521, 96.4007, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (87, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.452, 96.401, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (88, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4518, 96.4014, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (89, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4516, 96.4017, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (90, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4515, 96.402, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (91, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4514, 96.4023, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (92, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4513, 96.4026, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (93, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4512, 96.403, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (94, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4511, 96.4033, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (95, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.451, 96.4036, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (96, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.451, 96.404, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (97, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4511, 96.4043, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (98, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4512, 96.4046, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (99, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4512, 96.405, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (100, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4513, 96.4053, '-', '/assets/img.jpg');
INSERT INTO `t_aset` VALUES (101, 6, '-', '-', 'Penerangan Jalan Umum', 'Aceh', 'Simeulue', 'Simeulue Timur', 'Kota Batu', 0000, '-', 'memberikan pencahayaan buatan bagi pengguna jalan', '-', '-', '-', '-', 2.4514, 96.4056, '-', '/assets/img.jpg');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `pass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `nip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `lastlogin` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, 'admin', '202cb962ac59075b964b07152d234b70', 'Andri Januardi', '199201192020121006', '2023-08-07 01:13:05');

-- ----------------------------
-- View structure for v_aset
-- ----------------------------
DROP VIEW IF EXISTS `v_aset`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `v_aset` AS select `t_aset`.`id` AS `id`,`ref_tipe`.`nama` AS `tipe`,`t_aset`.`id_tipe` AS `id_tipe`,`t_aset`.`no_aset` AS `no_aset`,`t_aset`.`kode` AS `kode`,`t_aset`.`nama` AS `nama`,`t_aset`.`prov` AS `prov`,`t_aset`.`kab` AS `kab`,`t_aset`.`kec` AS `kec`,`t_aset`.`desa` AS `desa`,`t_aset`.`sdana` AS `sdana`,`t_aset`.`tahun` AS `tahun`,`t_aset`.`fungsi` AS `fungsi`,`t_aset`.`jenis` AS `jenis`,`t_aset`.`status` AS `status`,`t_aset`.`kondisi` AS `kondisi`,`t_aset`.`kewenangan` AS `kewenangan`,`t_aset`.`lat` AS `lat`,`t_aset`.`long` AS `long`,`t_aset`.`ket` AS `ket`,`ref_tipe`.`icon` AS `icon`,`t_aset`.`gambar` AS `gambar` from (`t_aset` left join `ref_tipe` on((`t_aset`.`id_tipe` = `ref_tipe`.`id`)));

SET FOREIGN_KEY_CHECKS = 1;

const db = {
    modelosAll: [
        {
            nombre: "PEDMUN XII",
            institucion: "Instituto Pedagogico Nacional",
            Fecha: "Septiembre",
            linkInstagram: "https://www.instagram.com/pedmunxii/",
            locacion: "Av. C. 127 #11, Bogotá",
        },
        {
            nombre: "CISMUN",
            institucion: "Colegio Cambridge",
            Fecha: "Septiembre",
            linkInstagram: "https://www.instagram.com/cismun.cs/",
            locacion: "Finca La Aurora, Kilómetro 7 Vía La Calera Bogotá",
        },
        {
            nombre: "EMUN IX",
            institucion: "Colegio Gimnasio Bilingüe la Enseñanza",
            Fecha: "21 y 22 de Septiembre",
            linkInstagram: "https://www.instagram.com/ensenanzamodel_/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CRBMUN XI",
            institucion: "Colegio Cristo Rey",
            Fecha: "21 y 22 de Septiembre",
            linkInstagram: "https://www.instagram.com/_nesmun_/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "MUNUNAL",
            institucion: "Universidad Nacional",
            Fecha: "20, 21, 22 y 23 de Septiembre",
            linkInstagram: "https://www.instagram.com/mununal/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "SJBMUN IX",
            institucion: "Colegio San Juan Bosco",
            Fecha: "26 y 27 de Octubre",
            linkInstagram: "https://www.instagram.com/sjbmunix/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CMUN 2023",
            institucion: "Colegio Canapro",
            Fecha: "3 y 4 de Noviembre",
            linkInstagram: "https://www.instagram.com/cmun._/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "HISMUN II",
            institucion: "Colegio Liceo Hypatia",
            Fecha: "22 y 23 de Noviembre",
            linkInstagram: "https://www.instagram.com/hismun_ii/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "VMUN XII",
            institucion: "Gimnasio Vermont",
            Fecha: "29, 30 (Nov) y 1 (Dic)",
            linkInstagram: "https://www.instagram.com/vmunxii/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CERMUN VIII",
            institucion: "Gimnasio de los Cerros",
            Fecha: "1, 2 y 3 de Diciembre",
            linkInstagram: "https://www.instagram.com/cermunviii/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CACMUN",
            institucion: "Colegio Anglo Colombiano",
            Fecha: "Marzo",
            linkInstagram: "https://www.instagram.com/cacmun.anglo/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "NESMUN",
            institucion: "Colegio Nueva Inglaterra",
            Fecha: "Mayo",
            linkInstagram: "https://www.instagram.com/_nesmun_/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "GSAMUN IX",
            institucion: "Colegio Gimnasio San Angelo",
            Fecha: "Post-mitad del año",
            linkInstagram: "https://www.instagram.com/gsa_mun",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "RMUN XIX",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "CNGMUN XLII",
            institucion: "Colegio Nueva Granada",
            Fecha: "8, 9 y 10 de Febrero",
            linkInstagram: "https://www.instagram.com/cngmun2024/",
            locacion: "Cra 2 Este #70-20, Bogota",
        },
        {
            nombre: "MUNEB 2024",
            institucion: "Universidad del Bosque",
            Fecha: "15, 16, 17 y  18 de Febrero",
            linkInstagram: "https://www.instagram.com/stories/muneb_org/",
            locacion: "Ak. 9 #131a-2, Bogota",
        },
        {
            nombre: "CSVMUN III",
            institucion: "Colegio San Viator",
            Fecha: "22 y 23 de Febrero",
            linkInstagram: "https://www.instagram.com/csvmun_/",
            locacion: "Autopista Nte. #209-51, Suba, Bogota",
        },
        {
            nombre: "TVSMUN XVII",
            institucion: "Colegio The Victoria School",
            Fecha: "23, 24 y 25 de Febrero",
            linkInstagram: "https://www.instagram.com/tvsmun/",
            locacion: "Calle 215 No. 50-60, Suba, Bogota",
        },
        {
            nombre: "CLNMUN VI",
            institucion: "Colegio Los Nogales",
            Fecha: "8, 9 y 10 de Marzo",
            linkInstagram: "https://www.instagram.com/p/Ctjo3t3OQbz/",
            locacion: "Cl. 202 #5650, Bogota",
        },
        {
            nombre: "SACMUN XVIII",
            institucion: "Colegio San Carlos",
            Fecha: "21, 22 y 23 de Marzo",
            linkInstagram: "https://www.instagram.com/sacmuncsc/",
            locacion: "Cl. 192 #9 - 45, Bogota",
        },
        {
            nombre: "CUMUN",
            institucion: "Colegio Cumbres",
            Fecha: "10, 11 y 12 de Abril",
            linkInstagram: "https://www.instagram.com/cumun__/",
            locacion: "Autonor. Km. 6 Vereda Yerbabuena, Chia",
        },
        {
            nombre: "CSMUN X",
            institucion: "Colegio Bilingue Clermont",
            Fecha: "10, 11 y 12 de Abril",
            linkInstagram: "https://www.instagram.com/csmun_/",
            locacion: "Tv. 80 #213a-17, Bogota",
        },
        {
            nombre: "GNMUN",
            institucion: "Colegio Gimnasio del Norte",
            Fecha: "15 y 16 de Abril",
            linkInstagram: "https://www.instagram.com/gnmun2023/",
            locacion: "Cl. 207 #70-50, Bogotá",
        },
        {
            nombre: "TREMUN XV",
            institucion: "Colegio Los Tréboles",
            Fecha: "17 y 18 de Abril",
            linkInstagram: "https://www.instagram.com/tremun_clt/",
            locacion: "Vereda Cerca de Piedra, Finca Santa Helena. Chía",
        },
        {
            nombre: "SMMUN XIV",
            institucion: "Colegio San Mateo",
            Fecha: "24, 25 y 26 de Abril",
            linkInstagram: "https://www.instagram.com/bogmunsalle/",
            locacion: "Cl. 215 #50-24, Bogotá",
        },
        {
            nombre: "MUNARB IV",
            institucion: "Colegio Gimnasio la Arboleda",
            Fecha: "25 y 26 de Abril",
            linkInstagram: "https://www.instagram.com/munarb_ga/",
            locacion: "Km 6, Av. la Conejera, Bogotá",
        },
        {
            nombre: "MUNUS '24",
            institucion: "Universidad de la Sabana",
            Fecha: "25, 26, 27 y 28 de Abril",
            linkInstagram: "https://www.instagram.com/munus_usabana/",
            locacion: "Chía",
        },
        {
            nombre: "SBLMMUN XV",
            institucion: "Colegio San Bartolomé",
            Fecha: "10, 11 y 12 de Mayo",
            linkInstagram: "https://www.instagram.com/sblmmun_oficial/",
            locacion: "Cra. 7 #9-96, La Candelaria, Bogotá",
        },
        {
            nombre: "PUJMUN X",
            institucion: "Pontificia Universidad Javeriana",
            Fecha: "17, 18 y 19 de Mayo",
            linkInstagram: "https://www.instagram.com/pujmun/",
            locacion: "Cra. 7 #40 - 62, Bogotá",
        },
        {
            nombre: "FEMMUN IX",
            institucion: "Colegio Gimnasio Femenino",
            Fecha: "24, 25 y 26 de Mayo",
            linkInstagram: "https://www.instagram.com/femmungimfem/",
            locacion: "Cra. 7 No. 128 - 40",
        },
        {
            nombre: "CNYMUN VII",
            institucion: "Colegio Nueva York",
            Fecha: "24, 25 y 26 de Mayo",
            linkInstagram: "https://www.instagram.com/cnymun_/",
            locacion: "Calle 227 #49 64, Bogotá",
        },
        {
            nombre: "MBSMUN XII",
            institucion: "Colegio Montessori British School",
            Fecha: "5 y 6 de Junio",
            linkInstagram: "https://www.instagram.com/mbsmun/",
            locacion: "Cl. 128 #72 - 80, Suba, Bogotá",
        },
        {
            nombre: "BOGMUNSALLE",
            institucion: "Colegio de la Salle",
            Fecha: "5, 6 y 7 de Junio",
            linkInstagram: "https://www.instagram.com/bogmunsalle/",
            locacion: "Cl. 170 #12-10, Bogotá",
        },
        {
            nombre: "URANOMUN",
            institucion: "Colegio Integración Moderna",
            Fecha: "7 y 8 de Junio",
            linkInstagram: "https://www.instagram.com/urano.num/",
            locacion: "Cl. 4 #71a-41, Bogotá",
        },
        {
            nombre: "LCBMUN VIII",
            institucion: "Liceo de Colombia Bilingüe",
            Fecha: "12, 13 y 14 de Junio",
            linkInstagram: "https://www.instagram.com/lcb_mun/",
            locacion: "Cl. 219 #50-30, Suba, Bogotá",
        },
        {
            nombre: "GMMUN XVII",
            institucion: "Colegio Gimnasio Moderno",
            Fecha: "23, 24 y 25 de Agosto",
            linkInstagram: "https://www.instagram.com/gmmunxvii/",
            locacion: "Cra. 9 #74-99, Bogotá",
        },
        {
            nombre: "SPMUN I",
            institucion: "Colegio San Patricio",
            Fecha: "29 y 30 de Agosto",
            linkInstagram: "https://www.instagram.com/spmun_csp/",
            locacion: "Cra. 80 # 137 - 02, Bogotá",
        },
        {
            nombre: "JDSMUN II",
            institucion: "Colegio Jordán de Sajonia",
            Fecha: "6, 7 Y 8 de Septiembre",
            linkInstagram: "https://www.instagram.com/jdsmun/",
            locacion: " Cra. 1ª #6850, Bogotá",
        },
        {
            nombre: "GLPMUN IX",
            institucion: "Colegio Gimnasio los Pinos",
            Fecha: "11, 12 y 13 de Septiembre",
            linkInstagram: "https://www.instagram.com/glpmun/",
            locacion: "Cl. 193 #38-20, Bogotá",
        },
        {
            nombre: "EMUN XII",
            institucion: "Colegio Gimnasio Bilingüe la Enseñanza",
            Fecha: "19 y 20 de Septiembre",
            linkInstagram: "https://www.instagram.com/ensenanzamodel_/",
            locacion: " AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "MUNUM 2023",
            institucion: "Universidad Militar Nueva Granada",
            Fecha: "19, 20, 21 y 22 de Septiembre",
            linkInstagram: "https://www.instagram.com/munum.co/",
            locacion: "Cra. 11 #101-80, Bogotá",
        },
        {
            nombre: "EDMUN IV",
            institucion: "Colegio Emmanuel d'Alzon",
            Fecha: "25, 26 y 27 de Septiembre",
            linkInstagram: "https://www.instagram.com/edmun.24/",
            locacion: "Tv. 56 #114-50, Bogotá",
        },
        {
            nombre: "GLAMUN IX",
            institucion: "Colegio Gimnasio los Andes",
            Fecha: "30 de Sept, 1 y 2 de Octubre",
            linkInstagram: "https://www.instagram.com/glamun_2024/",
            locacion: "Cl. 209 #45-80, Suba, Bogotá",
        },
        {
            nombre: "IRMUN X",
            institucion: "Colegio Iragua Aspaen",
            Fecha: "4, 5  y 6 de Octubre",
            linkInstagram: "https://www.instagram.com/irmunix/",
            locacion: "Cl. 170 #76-55, Suba, Bogotá",
        },
        {
            nombre: "MONUA 2024",
            institucion: "Universidad de los Andes",
            Fecha: "11, 12, 13 y 14 de Octubre",
            linkInstagram: "https://www.instagram.com/monuauniandes/",
            locacion: "Cra. 1 #18a-12, Bogotá",
        },
        {
            nombre: "HISMUN",
            institucion: "Colegio Liceo Hypatia",
            Fecha: "19 y 20 de Octubre",
            linkInstagram: "https://www.instagram.com/hismun_lh/",
            locacion: "Cra 153 # 94-32, Bogotá",
        },
        {
            nombre: "CTMUN XVI",
            institucion: "Colegio Tilatá",
            Fecha: "18, 19 y 20 de Octubre",
            linkInstagram: "https://www.instagram.com/_ctmun_/",
            locacion: "Km.9 Vía Bogotá - La Calera",
        },
        {
            nombre: "SEKMUN I",
            institucion: "Colegio Internacional SEK Colombia",
            Fecha: "25, 26 y 27 de Octubre",
            linkInstagram: "https://www.instagram.com/sekmun_/",
            locacion: "Auto. Nor. Km 25, vía, Sopó-Vereda Yerbabuena, Chía",
        },
        {
            nombre: "MUNUR XV",
            institucion: "Universidad del Rosario",
            Fecha: "1, 2, 3 y 4 de Noviembre",
            linkInstagram: "https://www.instagram.com/munur.ur/",
            locacion: "Cl. 12c #Nº 6-25, Bogotá",
        },
        {
            nombre: "GMUN X",
            institucion: "Colegio Colombo Gales",
            Fecha: "14, 15 y 16 de Noviembre",
            linkInstagram: "https://www.instagram.com/galesmun/",
            locacion: "AV. Guaymaral Costado Sur, Aeropuerto, Bogotá",
        },
        {
            nombre: "SAMMUN XX",
            institucion: "Colegio Santa María",
            Fecha: "15, 16 y 17 de Noviembre",
            linkInstagram: "https://www.instagram.com/sammun.xix/",
            locacion: "Cra. 11 #185B-17, Usaquén, Bogotá",
        },
    ],
    modelosLegacy: [
        {
            nombre: "PEDMUN XII",
            institucion: "Instituto Pedagogico Nacional",
            Fecha: "Septiembre",
            linkInstagram: "https://www.instagram.com/pedmunxii/",
            locacion: "Av. C. 127 #11, Bogotá",
        },
        {
            nombre: "CISMUN",
            institucion: "Colegio Cambridge",
            Fecha: "Septiembre",
            linkInstagram: "https://www.instagram.com/cismun.cs/",
            locacion: "Finca La Aurora, Kilómetro 7 Vía La Calera Bogotá",
        },
        {
            nombre: "EMUN IX",
            institucion: "Colegio Gimnasio Bilingüe la Enseñanza",
            Fecha: "21 y 22 de Septiembre",
            linkInstagram: "https://www.instagram.com/ensenanzamodel_/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CRBMUN XI",
            institucion: "Colegio Cristo Rey",
            Fecha: "21 y 22 de Septiembre",
            linkInstagram: "https://www.instagram.com/_nesmun_/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "MUNUNAL",
            institucion: "Universidad Nacional",
            Fecha: "20, 21, 22 y 23 de Septiembre",
            linkInstagram: "https://www.instagram.com/mununal/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "SJBMUN IX",
            institucion: "Colegio San Juan Bosco",
            Fecha: "26 y 27 de Octubre",
            linkInstagram: "https://www.instagram.com/sjbmunix/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CMUN 2023",
            institucion: "Colegio Canapro",
            Fecha: "3 y 4 de Noviembre",
            linkInstagram: "https://www.instagram.com/cmun._/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "HISMUN II",
            institucion: "Colegio Liceo Hypatia",
            Fecha: "22 y 23 de Noviembre",
            linkInstagram: "https://www.instagram.com/hismun_ii/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "VMUN XII",
            institucion: "Gimnasio Vermont",
            Fecha: "29, 30 (Nov) y 1 (Dic)",
            linkInstagram: "https://www.instagram.com/vmunxii/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CERMUN VIII",
            institucion: "Gimnasio de los Cerros",
            Fecha: "1, 2 y 3 de Diciembre",
            linkInstagram: "https://www.instagram.com/cermunviii/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "CACMUN",
            institucion: "Colegio Anglo Colombiano",
            Fecha: "Marzo",
            linkInstagram: "https://www.instagram.com/cacmun.anglo/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "NESMUN",
            institucion: "Colegio Nueva Inglaterra",
            Fecha: "Mayo",
            linkInstagram: "https://www.instagram.com/_nesmun_/",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "GSAMUN IX",
            institucion: "Colegio Gimnasio San Angelo",
            Fecha: "Post-mitad del año",
            linkInstagram: "https://www.instagram.com/gsa_mun",
            locacion: "AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
    ],
    modelos2024: [
        {
            nombre: "RMUN XIX",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "CNGMUN XLII",
            institucion: "Colegio Nueva Granada",
            Fecha: "8, 9 y 10 de Febrero",
            linkInstagram: "https://www.instagram.com/cngmun2024/",
            locacion: "Cra 2 Este #70-20, Bogota",
        },
        {
            nombre: "MUNEB 2024",
            institucion: "Universidad del Bosque",
            Fecha: "15, 16, 17 y  18 de Febrero",
            linkInstagram: "https://www.instagram.com/stories/muneb_org/",
            locacion: "Ak. 9 #131a-2, Bogota",
        },
        {
            nombre: "CSVMUN III",
            institucion: "Colegio San Viator",
            Fecha: "22 y 23 de Febrero",
            linkInstagram: "https://www.instagram.com/csvmun_/",
            locacion: "Autopista Nte. #209-51, Suba, Bogota",
        },
        {
            nombre: "TVSMUN XVII",
            institucion: "Colegio The Victoria School",
            Fecha: "23, 24 y 25 de Febrero",
            linkInstagram: "https://www.instagram.com/tvsmun/",
            locacion: "Calle 215 No. 50-60, Suba, Bogota",
        },
        {
            nombre: "CLNMUN VI",
            institucion: "Colegio Los Nogales",
            Fecha: "8, 9 y 10 de Marzo",
            linkInstagram: "https://www.instagram.com/p/Ctjo3t3OQbz/",
            locacion: "Cl. 202 #5650, Bogota",
        },
        {
            nombre: "SACMUN XVIII",
            institucion: "Colegio San Carlos",
            Fecha: "21, 22 y 23 de Marzo",
            linkInstagram: "https://www.instagram.com/sacmuncsc/",
            locacion: "Cl. 192 #9 - 45, Bogota",
        },
        {
            nombre: "CUMUN",
            institucion: "Colegio Cumbres",
            Fecha: "10, 11 y 12 de Abril",
            linkInstagram: "https://www.instagram.com/cumun__/",
            locacion: "Autonor. Km. 6 Vereda Yerbabuena, Chia",
        },
        {
            nombre: "CSMUN X",
            institucion: "Colegio Bilingue Clermont",
            Fecha: "10, 11 y 12 de Abril",
            linkInstagram: "https://www.instagram.com/csmun_/",
            locacion: "Tv. 80 #213a-17, Bogota",
        },
        {
            nombre: "GNMUN",
            institucion: "Colegio Gimnasio del Norte",
            Fecha: "15 y 16 de Abril",
            linkInstagram: "https://www.instagram.com/gnmun2023/",
            locacion: "Cl. 207 #70-50, Bogotá",
        },
        {
            nombre: "TREMUN XV",
            institucion: "Colegio Los Tréboles",
            Fecha: "17 y 18 de Abril",
            linkInstagram: "https://www.instagram.com/tremun_clt/",
            locacion: "Vereda Cerca de Piedra, Finca Santa Helena. Chía",
        },
        {
            nombre: "SMMUN XIV",
            institucion: "Colegio San Mateo",
            Fecha: "24, 25 y 26 de Abril",
            linkInstagram: "https://www.instagram.com/bogmunsalle/",
            locacion: "Cl. 215 #50-24, Bogotá",
        },
        {
            nombre: "MUNARB IV",
            institucion: "Colegio Gimnasio la Arboleda",
            Fecha: "25 y 26 de Abril",
            linkInstagram: "https://www.instagram.com/munarb_ga/",
            locacion: "Km 6, Av. la Conejera, Bogotá",
        },
        {
            nombre: "MUNUS '24",
            institucion: "Universidad de la Sabana",
            Fecha: "25, 26, 27 y 28 de Abril",
            linkInstagram: "https://www.instagram.com/munus_usabana/",
            locacion: "Chía",
        },
        {
            nombre: "SBLMMUN XV",
            institucion: "Colegio San Bartolomé",
            Fecha: "10, 11 y 12 de Mayo",
            linkInstagram: "https://www.instagram.com/sblmmun_oficial/",
            locacion: "Cra. 7 #9-96, La Candelaria, Bogotá",
        },
        {
            nombre: "PUJMUN X",
            institucion: "Pontificia Universidad Javeriana",
            Fecha: "17, 18 y 19 de Mayo",
            linkInstagram: "https://www.instagram.com/pujmun/",
            locacion: "Cra. 7 #40 - 62, Bogotá",
        },
        {
            nombre: "FEMMUN IX",
            institucion: "Colegio Gimnasio Femenino",
            Fecha: "24, 25 y 26 de Mayo",
            linkInstagram: "https://www.instagram.com/femmungimfem/",
            locacion: "Cra. 7 No. 128 - 40",
        },
        {
            nombre: "CNYMUN VII",
            institucion: "Colegio Nueva York",
            Fecha: "24, 25 y 26 de Mayo",
            linkInstagram: "https://www.instagram.com/cnymun_/",
            locacion: "Calle 227 #49 64, Bogotá",
        },
        {
            nombre: "MBSMUN XII",
            institucion: "Colegio Montessori British School",
            Fecha: "5 y 6 de Junio",
            linkInstagram: "https://www.instagram.com/mbsmun/",
            locacion: "Cl. 128 #72 - 80, Suba, Bogotá",
        },
        {
            nombre: "BOGMUNSALLE",
            institucion: "Colegio de la Salle",
            Fecha: "5, 6 y 7 de Junio",
            linkInstagram: "https://www.instagram.com/bogmunsalle/",
            locacion: "Cl. 170 #12-10, Bogotá",
        },
        {
            nombre: "URANOMUN",
            institucion: "Colegio Integración Moderna",
            Fecha: "7 y 8 de Junio",
            linkInstagram: "https://www.instagram.com/urano.num/",
            locacion: "Cl. 4 #71a-41, Bogotá",
        },
        {
            nombre: "LCBMUN VIII",
            institucion: "Liceo de Colombia Bilingüe",
            Fecha: "12, 13 y 14 de Junio",
            linkInstagram: "https://www.instagram.com/lcb_mun/",
            locacion: "Cl. 219 #50-30, Suba, Bogotá",
        },
        {
            nombre: "GMMUN XVII",
            institucion: "Colegio Gimnasio Moderno",
            Fecha: "23, 24 y 25 de Agosto",
            linkInstagram: "https://www.instagram.com/gmmunxvii/",
            locacion: "Cra. 9 #74-99, Bogotá",
        },
        {
            nombre: "SPMUN I",
            institucion: "Colegio San Patricio",
            Fecha: "29 y 30 de Agosto",
            linkInstagram: "https://www.instagram.com/spmun_csp/",
            locacion: "Cra. 80 # 137 - 02, Bogotá",
        },
        {
            nombre: "JDSMUN II",
            institucion: "Colegio Jordán de Sajonia",
            Fecha: "6, 7 Y 8 de Septiembre",
            linkInstagram: "https://www.instagram.com/jdsmun/",
            locacion: " Cra. 1ª #6850, Bogotá",
        },
        {
            nombre: "GLPMUN IX",
            institucion: "Colegio Gimnasio los Pinos",
            Fecha: "11, 12 y 13 de Septiembre",
            linkInstagram: "https://www.instagram.com/glpmun/",
            locacion: "Cl. 193 #38-20, Bogotá",
        },
        {
            nombre: "EMUN XII",
            institucion: "Colegio Gimnasio Bilingüe la Enseñanza",
            Fecha: "19 y 20 de Septiembre",
            linkInstagram: "https://www.instagram.com/ensenanzamodel_/",
            locacion: " AV. El Polo, Cl. 201 #67-12, Suba, Bogotá",
        },
        {
            nombre: "MUNUM 2023",
            institucion: "Universidad Militar Nueva Granada",
            Fecha: "19, 20, 21 y 22 de Septiembre",
            linkInstagram: "https://www.instagram.com/munum.co/",
            locacion: "Cra. 11 #101-80, Bogotá",
        },
        {
            nombre: "EDMUN IV",
            institucion: "Colegio Emmanuel d'Alzon",
            Fecha: "25, 26 y 27 de Septiembre",
            linkInstagram: "https://www.instagram.com/edmun.24/",
            locacion: "Tv. 56 #114-50, Bogotá",
        },
        {
            nombre: "GLAMUN IX",
            institucion: "Colegio Gimnasio los Andes",
            Fecha: "30 de Sept, 1 y 2 de Octubre",
            linkInstagram: "https://www.instagram.com/glamun_2024/",
            locacion: "Cl. 209 #45-80, Suba, Bogotá",
        },
        {
            nombre: "IRMUN X",
            institucion: "Colegio Iragua Aspaen",
            Fecha: "4, 5  y 6 de Octubre",
            linkInstagram: "https://www.instagram.com/irmunix/",
            locacion: "Cl. 170 #76-55, Suba, Bogotá",
        },
        {
            nombre: "MONUA 2024",
            institucion: "Universidad de los Andes",
            Fecha: "11, 12, 13 y 14 de Octubre",
            linkInstagram: "https://www.instagram.com/monuauniandes/",
            locacion: "Cra. 1 #18a-12, Bogotá",
        },
        {
            nombre: "HISMUN",
            institucion: "Colegio Liceo Hypatia",
            Fecha: "19 y 20 de Octubre",
            linkInstagram: "https://www.instagram.com/hismun_lh/",
            locacion: "Cra 153 # 94-32, Bogotá",
        },
        {
            nombre: "CTMUN XVI",
            institucion: "Colegio Tilatá",
            Fecha: "18, 19 y 20 de Octubre",
            linkInstagram: "https://www.instagram.com/_ctmun_/",
            locacion: "Km.9 Vía Bogotá - La Calera",
        },
        {
            nombre: "SEKMUN I",
            institucion: "Colegio Internacional SEK Colombia",
            Fecha: "25, 26 y 27 de Octubre",
            linkInstagram: "https://www.instagram.com/sekmun_/",
            locacion: "Auto. Nor. Km 25, vía, Sopó-Vereda Yerbabuena, Chía",
        },
        {
            nombre: "MUNUR XV",
            institucion: "Universidad del Rosario",
            Fecha: "1, 2, 3 y 4 de Noviembre",
            linkInstagram: "https://www.instagram.com/munur.ur/",
            locacion: "Cl. 12c #Nº 6-25, Bogotá",
        },
        {
            nombre: "GMUN X",
            institucion: "Colegio Colombo Gales",
            Fecha: "14, 15 y 16 de Noviembre",
            linkInstagram: "https://www.instagram.com/galesmun/",
            locacion: "AV. Guaymaral Costado Sur, Aeropuerto, Bogotá",
        },
        {
            nombre: "SAMMUN XX",
            institucion: "Colegio Santa María",
            Fecha: "15, 16 y 17 de Noviembre",
            linkInstagram: "https://www.instagram.com/sammun.xix/",
            locacion: "Cra. 11 #185B-17, Usaquén, Bogotá",
        },
    ],
    modelos2025: [
        {
            nombre: "MMUN XV",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "GICMUN IX",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "TESMUN XXI",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "CLCMUN XIV",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "BUCKMUN XVIII",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "PACHASMUN I",
            institucion: "Colegio Rochester",
            Fecha: "29 y 30 de Enero",
            linkInstagram: "https://www.instagram.com/rochester.mun/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
        {
            nombre: "CNYMUN VII",
            institucion: "Colegio Nueva York",
            Fecha: "23, 24 y 25 de Mayo",
            linkInstagram: "https://www.instagram.com/cnymun_/",
            locacion: "Vereda Fusca, Chia, Cundinamarca, 250008",
        },
    ],
}

function mostrarPosts() {
    const numeroPosts = document.getElementById("number-post").value;
    const contenedorPosts = document.querySelector(".contenedor-posts");
    contenedorPosts.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos posts

    for (let i = 0; i < numeroPosts; i++) {
        const post = document.createElement("div");
        post.classList.add("post", "col", 'id="post-model"'); // Add all provided classes

        const postContent = `
    <div class="card shadow-sm">
        <div id="carouselExampleIndicators${i}" class="carousel slide">
            <div class="carousel-indicators">
                <button id="slide" type="button" data-bs-target="#carouselExampleIndicators${i}"
                    data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button id="slide" type="button" data-bs-target="#carouselExampleIndicators${i}"
                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button id="slide" type="button" data-bs-target="#carouselExampleIndicators${i}"
                    data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button id="carousel-btn" class="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button id="carousel-btn" class="carousel-control-next" type="button"
                data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="card-body">
            <h5 class="card-text"><strong>${db.modelosAll[i].institucion}</strong></h5>
            <h4 class="card-text">${db.modelosAll[i].nombre}</h4>
            <h5 class="card-text"><i>Fecha: ${db.modelosAll[i].Fecha}</i></h5>
            <p class="card-text" id="direccion">Dirección: ${db.modelosAll[i].locacion} </p>
            <p class="card-text" id="linkIns"><a href="${db.modelosAll[i].linkInstagram}">Instagram </a></p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <!--- <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ViewModal">Ver mas...</button> --->
                </div>
                <!-- <small class="text-body-secondary">9 mins</small> -->
            </div>
        </div>
    </div>
`;
        post.innerHTML = postContent;
        contenedorPosts.appendChild(post);
    }
}

export default {mostrarPosts};

/*
const editCardBody = document.getElementById("editCardBody");
const editBtnY = document.getElementById("editBtn1");
function editarPosts() {
    editCardBody.innerHTML =
        `<h8 class='card-text'><strong>Selecciona la Imagen: </strong></h8>
        <br>
        <input type='file' id='imagen'>
        <br>
        <br>
        <h8 class='card-text'><strong>Escribe el nuevo nombre y Fecha con el siguiente formato: </strong></h8>
        <p class='card-text'>[Nombre del Modelo] [Fecha de modelo]</p>
        <input type='text' id='titulo-fecha'></input>
        <br>
        <br>
        <h9 class='card-text'><strong>Ingresa la nueva descripción del modelo</strong></h9>
        <br>
        <input type='text' id='descripcion'></input>
        <h5 class="card-text">¿Quieres salir del modo de edición?</h5>
        <div class="btn-group">
            <button onclick="salirEditMode()" id='editBtn1' type="button" class="btn btn-sm btn-outline-secondary">
                Si
            </button>
            <button onclick="quedarseEditMode()" id='editBtn0' type="button" class="btn btn-sm btn-outline-secondary">
                No
            </button>
        </div>`;
}

const editBtnN = document.getElementById("editBtn0");
function noEditarPosts() {
    editCardBody.innerHTML = `
    <div id="editModalCarouselIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button id="slide" type="button" data-bs-target="#viewModalCarouselIndicators"
                data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button id="carousel-btn" class="carousel-control-prev" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button id="carousel-btn" class="carousel-control-next" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <br>
    <h5 class="card-text">
        <strong>[Nombre del Modelo] [Fecha de modelo]</strong>
    </h5>
    <p class="card-text">
        Una breve descripción hablando sobre el modelo.
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">9 mins</small>
        </div>
    </p>`
}

function quedarseEditMode() {
    editCardBody.innerHTML =
        `<h8 class='card-text'><strong>Selecciona la Imagen: </strong></h8>
        <br>
        <input type='file' id='imagen'>
        <br>
        <br>
        <h8 class='card-text'><strong>Escribe el nuevo nombre y Fecha con el siguiente formato: </strong></h8>
        <p class='card-text'>[Nombre del Modelo] [Fecha de modelo]</p>
        <input type='text' id='titulo-fecha'></input>
        <br>
        <br>
        <h9 class='card-text'><strong>Ingresa la nueva descripción del modelo</strong></h9>
        <br>
        <input type='text' id='descripcion'></input>`;
}

function salirEditMode() {
    editCardBody.innerHTML =`
    <div id="editModalCarouselIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button id="slide" type="button" data-bs-target="#viewModalCarouselIndicators"
                data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button id="carousel-btn" class="carousel-control-prev" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button id="carousel-btn" class="carousel-control-next" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <h5 class="card-text"><strong>¿Deseas editar la información del modelo?</strong></h5>
    <div class="btn-group">
        <button onclick="editarPosts()" id='editBtn1' type="button" class="btn btn-sm btn-outline-secondary">
            Si
        </button>
        <button onclick="noEditarPosts()" id='editBtn0' type="button" class="btn btn-sm btn-outline-secondary">
            No
        </button>
    </div>
    <br>
    <h5 class="card-text">
        <strong>[Nombre del Modelo] [Fecha de modelo]</strong>
    </h5>
    <p class="card-text">
        Una breve descripción hablando sobre el modelo.
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">9 mins</small>
        </div>
    </p>`
}
*/

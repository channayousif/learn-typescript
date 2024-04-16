#! usr/bin/env node

/**
 * @Date: 14-04-2024
 * @Project: 04
 * @author: Channayousif
 * @description: Currency Converter, the TypeScript console app is used to convert
 *  currencies: the users enter a certain amount of money in one currency and set
 *  the currency they want to check the monetary value of.
 *  
 */
import inquirer from "inquirer";

const currencies=[
'ArgentinePeso',
'AustralianDollar',
'BahrainiDinar',
'BotswanaPula',
'BrazilianReal',
'BritishPound',
'BruneianDollar',
'BulgarianLev',
'CanadianDollar',
'ChileanPeso',
'ChineseYuanRenminbi',
'ColombianPeso',
'CzechKoruna',
'DanishKrone',
'EmiratiDirham',
'Euro',
'HongKongDollar',
'HungarianForint',
'IcelandicKrona',
'IndianRupee',
'IndonesianRupiah',
'IranianRial',
'IsraeliShekel',
'JapaneseYen',
'KazakhstaniTenge',
'KuwaitiDinar',
'LibyanDinar',
'MalaysianRinggit',
'MauritianRupee',
'MexicanPeso',
'NepaleseRupee',
'NewZealandDollar',
'NorwegianKrone',
'OmaniRial',
'PakistaniRupee',
'PhilippinePeso',
'PolishZloty',
'QatariRiyal',
'RomanianNewLeu',
'RussianRuble',
'SaudiArabianRiyal',
'SingaporeDollar',
'SouthAfricanRand',
'SouthKoreanWon',
'SriLankanRupee',
'SwedishKrona',
'SwissFranc',
'TaiwanNewDollar',
'ThaiBaht',
'TrinidadianDollar',
'TurkishLira',
'USDollar',
'VenezuelanBolivar',
]
enum currency_data {
    ArgentinePeso='3.118756',
AustralianDollar='0.005562',
BahrainiDinar='0.001353',
BotswanaPula=0.049183,BrazilianReal=0.018458,
BritishPound=0.00289,
BruneianDollar=0.0049,
BulgarianLev=0.006606,
CanadianDollar=0.004958,
ChileanPeso=3.481043,
ChineseYuanRenminbi=0.026048,
ColombianPeso=13.90975,
CzechKoruna=0.085725,
DanishKrone=0.025226,
EmiratiDirham=0.013218,
Euro=0.003378,
HongKongDollar=0.02821,
HungarianForint=1.329104,
IcelandicKrona=0.509463,
IndianRupee=0.300807,
IndonesianRupiah=57.38553,
IranianRial=151.177524,
IsraeliShekel=	0.013545,
JapaneseYen=	0.551879,
KazakhstaniTenge=	1.615989,
KuwaitiDinar=	0.001109,
LibyanDinar=	0.017393,
MalaysianRinggit=	0.01717,
MauritianRupee=	0.167042,
MexicanPeso=	0.059923,
NepaleseRupee=	0.481517,
NewZealandDollar=	0.006063,
NorwegianKrone=	0.039231,
OmaniRial=	0.001386,
PakistaniRupee=1,
PhilippinePeso=	0.203764,
PolishZloty=	0.014505,
QatariRiyal=	0.013101,
RomanianNewLeu=	0.016816,
RussianRuble=	0.335879,
SaudiArabianRiyal=	0.013497,
SingaporeDollar=	0.0049,
SouthAfricanRand=	0.067877,
SouthKoreanWon=	4.967257,
SriLankanRupee=	1.073887,
SwedishKrona=	0.039164,
SwissFranc=	0.003291,
TaiwanNewDollar=	0.116341,
ThaiBaht=	0.13189,
TrinidadianDollar=	0.024484,
TurkishLira=	0.116458,
USDollar=	0.003599,
VenezuelanBolivar=	13027.32674
}
let result=0;
console.log("--------------Welcome to channayousif currency converter---------------");
console.log("Press enter to continue, no to exit");
while(true){
const confirm= await inquirer.prompt([
    {
    message:"Enter to continue y/n",
    type:"confirm",
    name:"conf",
    }])
    console.log("ok!");
    if(confirm.conf!=true){
        console.log(' ______________________________________________________________________');
        console.log("|Thank you for using channayousif's currency converter!");
        console.log(' ----------------------------------------------------------------------');  
        break;
    }else{
    const exchange= await inquirer.prompt([
    {
    message:"Please select currency you want to exchange:",
    type:"list",
    name:"source",
    choices:currencies
    },
    {
    message:"Please enter the amount",
    type:"input",
    name:"amount",
    },
    inquirer.Separator,
    {
        message:"Please select target currency:",
        type:"list",
        name:"target",
        choices:currencies
    },
])
inquirer.Separator
if (exchange.source==exchange.target){
    console.log("You selected the same source and arget currencies! Please try again")
}else{
    console.log(' ______________________________________________________________________');
    console.log(`|${exchange.amount} ${exchange.source} are equivalemt to ${((Number(currency_data[exchange.target])/Number(currency_data[exchange.source]))*exchange.amount).toFixed(2)} ${exchange.target}`);
    console.log(' ----------------------------------------------------------------------');
}   
}
}
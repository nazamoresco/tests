'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "db9b455094bb834fa4b58fd29e7fc261",
"index.html": "eafed6958a316b15bfe4c504c58382c6",
"/": "eafed6958a316b15bfe4c504c58382c6",
"main.dart.js": "572d7ed986995d672c56af4177abf164",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f33f9cb8ba20cfa1a5bf26feccdcc16",
".git/config": "0fe7810d0fd28e8dd2387660ff1f61b6",
".git/objects/0d/7c7200de7fc8610d2efb71b663faad774d235a": "91b94a60f8c27171f9a3a9a0cdad2a18",
".git/objects/0d/ba68bbac331bd0dcbb6ff616481e7b9b41a577": "e25f302b1b463485dc44ba4667d1d7ba",
".git/objects/0d/164cd01b7c1f74a553874e4e48b4d8db296841": "95b5862c273af3f0ce3f6459f8f0255c",
".git/objects/59/c5d76082aba2ac7fe4bead08f9a3316e257978": "08c5a6cedbeacb6281bc445b21abf099",
".git/objects/92/50174ad2b0baa21e9827a5d6c098bac614df7f": "e0307a254ca31f02a6cda51c6084f604",
".git/objects/50/c1bcf5739c3aa95d5f45ae0377b0f7042e3738": "0116592e6de5fe180479329c9383f64c",
".git/objects/57/5b9bd78f81b34f92cc65c09d74bef9c68577f5": "030c104c5ea66fec61dabeab7279f503",
".git/objects/3b/1b27a3f335fb1f1c2f1d97dcd6713a58d2b4a8": "d3e51112fb443ca8735e5fac1b8d2ece",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/3c/aedaae3ec3bf95f2d4b2314c42ac143fc3ad6f": "70be04b3b5e87c80efa660a9487b7ff8",
".git/objects/3d/bf02fe4358a8db4c7081b763a01b44faca46ce": "8261f9979884cb9c012cc4cc1252d257",
".git/objects/93/8404d93ef7044909166aa038c6ea7e812e8b58": "c125ec313189da197c09b80f90738655",
".git/objects/60/f6ef7cf837d4b26d833ea0633d61e43aef8961": "b7dc473dc28ca945831dda6d340641fa",
".git/objects/60/d9c7cfeeac34ddef029e1a7dc3eb93a4c530e2": "2214f28feccc5e0c463e29d668df97b3",
".git/objects/33/6e0f363c098bad3e71ab273af9267e86f3b24a": "3490f41c8b4e28b936feeaed4883aca0",
".git/objects/a4/77c8e2d27e8aeb58b092aeeb6a6f6ba0af8801": "750dabe38dd5cb729daeebd6c77a2e0f",
".git/objects/b5/2b39adeabb1f5e32f476903f20690f93b2a43b": "4cc9d1ed6ad8d5bda4fe73431b8d2394",
".git/objects/ac/72820ab308036a787f6630b79f28eeb0835a60": "5bf3dfd92b7f50d0abcb7a2d3774a83e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/be/04829cd66f73ac474a956f73a5703b254167d4": "3a8994fe4dff0a371637ba0e6b577f93",
".git/objects/be/eb73ca057f549b514eb05d1c1cbfae12344e79": "0e3c02c95b32634c3f15676cc68a502a",
".git/objects/df/f1c276737ab48d26847e0b89b3794efa8bb847": "fd1a3692dba2f61665788c5fc6c9ba54",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "534f3183d78a0e2c26089d1cf390b6ce",
".git/objects/a5/27776d1f04fd78c716698efa119f81c275dc27": "acd2d486f7f4bdc6890aa8994c05aa58",
".git/objects/d1/10f5b60cbeaeb48ef235d9f8a158db585a1242": "51db4f428ee4ccf02715405c678e7ac2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e5/3c4b65942e1dcc0f94d9cb7f9359a5515e4ead": "2c4d15d6d0f571be1444529c8971e844",
".git/objects/e5/d3cc4c079575db8a0940dcd9531d8a4b3f4665": "a8c89cfdd10a304d8b9e9ace2143f638",
".git/objects/e5/288110e8ea6fad91e66659ca124f3a1a044c8e": "e36c206b56c87ee2eef21dfcf5fddcd8",
".git/objects/e2/1dab20ffcd4b2a24d79fc3b699e620aa639ee7": "6ccb58dfd4b1e1a6a4f07cc30ea5367a",
".git/objects/e2/a8cb12a791023bdfa136f3e72f7b81730ead07": "ed9c8f70f3cb9e24270c12752b7e8e03",
".git/objects/f4/a1e0871b72e13274239dd025f7a0c1d5888e46": "3f6f45ea86ea0e8c0b16876761d92fb2",
".git/objects/f3/a9e1e19b45f17bd63f06f0c0acd7035829a445": "a67d5369855061edbbda6ba9d43f8ffd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/bfd0e4de9dc531415c0163f57e30e425fd60f8": "3afee3f2aa7c0ff08bc884e6c57c2891",
".git/objects/ee/0be74d1226d9d9be7e933282859ffcf73bf9db": "0314d1f92c5f0ff5f9f7f398cb1a8959",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "beec33a20a19d6c9a511dc88932ab054",
".git/objects/f5/481b9c3d0a000386b40f3e64c46fd970715012": "f7b119090a4c639b3de9d6fc9429e3b7",
".git/objects/e3/6faf91985b929b369b37b1accb68b4d8df8050": "d87b3f520f90a9d00956b59d0575c4fc",
".git/objects/cf/922b43a988947382159626a596a1f934005366": "aebf45a8ea2a43bf39169e6e942f3877",
".git/objects/fb/124c8e8b353a707ecd970552457fb8ad458297": "79a226037f89d496b771162bfb86bc31",
".git/objects/c6/60b2f5f5878141ac66962f0e76b8bcaa75dd04": "57e08371bad09afb04c8c94bd7ea3361",
".git/objects/ec/47107aa49b667b37fcf28ff6989ce370f31ee5": "a44112ac2ad91a96550ab1421cf231ca",
".git/objects/ec/afcd1aa6ec0f553a3bfd9a3b33889e37e1bf0f": "4929acdd00a65cd31bd9688ff6350e13",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "8e902643fee5a014eaac2ee064eafb5f",
".git/objects/ec/932c5449624d12c6abac1505519870ed0b4511": "faea9868e5f3234b404f96cf784ddcb8",
".git/objects/18/62e32948579f10b15b77fd0f7d887722563805": "2c395efceff0804834d407f99e17054b",
".git/objects/29/d9357e01dbc7769ca88bbf5941675be58a8813": "23fb009ea62b87b29fdc237d1845fcd1",
".git/objects/45/eea006cbd58e7807e2a12c63c258ac3f801c59": "927dfe6e92be229dcff1fb3c69c6c0e8",
".git/objects/87/c0e867ad1fa6190e87ea818ffec3ba186599cc": "f590e717c2acab23ecc69f8e31be2b68",
".git/objects/1a/4614f0fb018978fbb407bbd198d379d544228a": "42544c8355de9bec67ea39ddd257162a",
".git/objects/17/9f8baa4a1d50f03d62dd6481e98bbfc5e4660e": "884e618ce4559cc5e416fc760e3a9a52",
".git/objects/7b/c4152522b1e96272f98267187c2023f700c0b2": "e62275d0f833a783ab69dbc63ff8d939",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/4c/a312901605e39fb581f604ba84245052284831": "57a4d3d0fa3fe8ec6010fe965a875b36",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "35207f93ccdbc5de5e18640f46b36217",
".git/objects/26/5c987fff027909465cb897fa5212bcf11658ac": "b6d647945ef343822eb4917b58467f94",
".git/objects/26/530a6d7924a1a14cb1e924d9f475d832be3517": "87b3001e0671bf38e0ad2c4d36bb76cc",
".git/objects/4d/dde59afb497c2b68441746feb4fb64bca14a45": "e78c6740d489ae967c65e32828e8e2af",
".git/objects/4d/bdf400a1feaef8114804e098c6f1850515dc49": "910b4b18703782a61c4ce72e86394bd6",
".git/objects/4d/71db1c1b8894e904b576b378b409d1a192c7e3": "538da2c9a593d8e662229a1ada23689f",
".git/objects/44/6f8746d20b9f8d4283c3279c61b83841697b11": "e368fe64ef2e05bd71ce97cb35515c37",
".git/objects/2f/666bf601cce3538be0ef9f883f84854d0db54f": "a0892d1b88dc3afec8f90e415d122d81",
".git/objects/2f/1d174698539f5cb9991540b64809ff42d3e1c5": "d711f404afed2d45d40fb3374235fb21",
".git/objects/88/1b0accdc09bebe0d25f4c39d6aca19832804bd": "9e08723d456932c6c640349e232be4d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/07/d6e3da78ddd84bd0aa1308affc41db61e0e0ae": "d36207edd381f68ef87499a2ba66b408",
".git/objects/07/33bd9d54655bd2e48a4a27198c9963d57e1dd2": "993b983dca6eccacacda44f70866e5b6",
".git/objects/07/f3c6e0d0081da1cbd0bb7e7bd1c8f01f89798b": "e90ab80cd8327101481dae4a15b0f3b3",
".git/objects/38/565c1cf0849a0ee247282a95bf0a815c99eea8": "1bca20a7d53601c07d1dad78384d0e8b",
".git/objects/6e/5d0cc4bdf78b35630df0a09be275f1f9029767": "c3411461b1357192bb786425ec349aec",
".git/objects/9a/9b76390a3c97ab0f3eee7e688c7611295db36f": "f3458ee58b9228cbe9d9b69454a37d7b",
".git/objects/36/60fd9efedbd8f56c0da1b72041a49ad0863f06": "70a2e873596b04dc5c90e972b09b9365",
".git/objects/5c/67c7c654685ebea4e7140013dfba7b1c1109db": "bdb975e6a31fe5e56b8aaecf5434df3b",
".git/objects/5c/cd11369507d1c0ad63ab4cc5eecf5a8c832909": "02ac18f27feaf88757771b4b0779bb06",
".git/objects/5c/0f11f534e940ba5d4bd88dccbf68ed8e0654e6": "731b742238a2a1c2d0d4c04ad9707ddf",
".git/objects/91/e8dbd467a10459ac781d6d308e0c71e268cf47": "ff8d4d19d34f2164cc67149adea5ad24",
".git/objects/96/2060282b948abb92a695f3a15c2745c56f4428": "f6977f27ba2715ca3ee4a94e9f9c4dc2",
".git/objects/96/be5093fe353a2bc4d5ce6138319f144b138863": "926c3cb61f2910977726ee9cdef58c02",
".git/objects/96/13e28458bab1c86cf5460c0995b1510e6e28d4": "1620123b2d3b56818aa612ee63bdbefe",
".git/objects/3a/57226fed2ff12d4b9bd81258e086fd5cf441ee": "44f42456b66e502f71aecf69076673be",
".git/objects/3a/c2cfd5cac56693110108e9b715b5557eb82eaf": "6c52be92a008e93c67dffee99c4106f1",
".git/objects/54/36d3982b4f910e5d0cd320b7808266006076d4": "eaefc03a1d719c44ead824bebde382b2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/3f/ecb20d035809d34361d8c38867e90f535651ca": "88d76002323fdebd194a1cfdb918729c",
".git/objects/30/d9c2e306e771d8c594bcbba049b3749cc0324a": "a6f2be8cf9d9b8b6e93319f7513d92b0",
".git/objects/5b/ace9253e78bacbb7b0106c1d0b49b326b293a4": "87cb312a75944feac2b778484ae2ea99",
".git/objects/5b/848424c4bd49d94698faa04aef7e2d52570dd8": "422923efa4ccf6a439241a61c800b291",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "3a01ef425b0fc58744da0c6d47637c9c",
".git/objects/01/21f4d17033f7777c47642d153f6437ec764d70": "aad852e85893bf3d66635dded814f09c",
".git/objects/55/ac18a780a99c164d09c4cf6dd01b6d2e528225": "ef3514956918356f020f0d0132ed77b4",
".git/objects/0f/e4b18b4f52a27ff009c8c78ece69e8b9045015": "3fe369be3e6e6d00940aadb07dac4c94",
".git/objects/0a/183188fd92a6af5171ce65b4412cb2a5d45c64": "d30cf819f10a895005ee73eb143c3691",
".git/objects/0a/d4e9a13094295fe77200ab16bd4337ba6ba3fa": "e221c102e3c159ddaa7fb20710284f01",
".git/objects/90/7e86a2385574577263e57081be678e0c2230e2": "fe6c58c90338680d19039ad215c17759",
".git/objects/d3/2386bc597ccfe095b3d6f2d9ecf5145700376e": "00eb84b7f853e8daeba41e71660cdc14",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/d4/1e52e438575a4be5e090410aaee01296a24850": "4e0665c7c6e06268b41b82f8e4521450",
".git/objects/a0/5f2f22358735988917eb188d49b293fbd918d7": "1c8fb6f8b2f47ac06963c7892b652198",
".git/objects/b1/f3feff3b0bc4dd0139e33ef90bd8e7f87a85cf": "ddd8455a8de519a592de8dc9be82f280",
".git/objects/b6/42cfadeee5eec1cecdf7e92ce2714bb203eb16": "f99aad8dd896365f7e1ccf102037abcf",
".git/objects/b6/ad7603d126c128805a24e3ca849caae0047f8b": "4227199eda25fe9149534c4862dfacdf",
".git/objects/d5/aa870be205adbeb058415e7aa13405e147a41b": "4f30ac3bdb42d27f497a7bba27dafc73",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "294a7b35d4d4988884b36a893e1c0a8c",
".git/objects/d2/d9e0750d73c4c470590e21783c07591e042779": "255411ee6a24a7e849b15359108c3023",
".git/objects/d2/433e2275f9fd71152f48bf31bf9707436e97c3": "640dbb4d5ac0dcc6a6bdec53b9f0412d",
".git/objects/aa/018141b2784af35b21282c8c0cafc21fc44f52": "e0dbd4c7bbdd1efe6d1baea7c6346550",
".git/objects/aa/4b3a34d5563f9bc587b367c9b5b74077f69048": "c434b204d940fefa98632bd70a23cade",
".git/objects/b7/15a6c85aa8c0de2111daf8f60f8cfc3b3dd87a": "afc3ffc4ab586056c0e575ae40fd38f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "ece6a0ff9a24a8f64dc6ea097b41ed92",
".git/objects/b0/07999312e9797b423ab51b9db7b3c409b627bc": "761e025c816b2a06606f29a01f17e7b0",
".git/objects/a6/a05db44d5ae08d3721e437d090dce9980437d0": "506859b68f373ba0a144a71acd357ff8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/8c762a9081560880a56a42706306a540bbf3e5": "e42ac827fb09513d9b2d3ffc72581149",
".git/objects/ef/0618622fd77ec1ec505f18ae370c176fe68d3a": "2262176a30414d554fde5b37adb192f5",
".git/objects/ef/d0b76734c023db8588504bbdb4b72a9bc87a80": "7ac3dadebb0d7535eac87a4c4dd3497f",
".git/objects/ea/02cb94d63a5264b1fa9a16440b0d5d6b7580df": "25b047efaceb897df4d56c5fd7503954",
".git/objects/e6/b8feab070e9e9053f11ee9aee6a570002ca731": "3e99627864707e774b76e6d4b4b0fe73",
".git/objects/e6/96e974b12cd518656b32a0ff2b375030e50124": "9b26d2a451d4d10c6f9df544d8acf8de",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/f0/1a946f1038d3d1b6d985af7ee79015845f6186": "ef6f897bb624b4f6b79f2af484b1bdc2",
".git/objects/f7/1d182d1b513aeae43d093e8200a05e8d02c434": "d9515fece86578f428342564eca8b660",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "d6e1364da0c48871bc1f4aa1ec5acdcd",
".git/objects/ff/0d510c8ffc9a9dc9e90e63dc633b7392f787dd": "497c2948f786d7439e36e80679a17198",
".git/objects/f1/4d674879219bdcbc3c08baf7dc322ab79c7f27": "57a4a6ab0e1489a40f3c9b5e75ae8548",
".git/objects/e7/7ca652268de754d539ef2a775d04bf6094833a": "c807b1a858d13801e88e0d8b473fcc84",
".git/objects/f8/9a678e5385ba2f80e360c84f0561f7f0e13723": "c43c6a6c5e3a0bb99bbae2088c699316",
".git/objects/ce/5ea93fae1d4a3b76d88dbd995215b8bca6b2db": "dd633899ad5c9c3d5fc519d53dd4b8c2",
".git/objects/e0/27221feb481d444c7df5d7e95291cf88b3afce": "8598ba8a698bf976b543eede1d8eac7c",
".git/objects/e0/ba37fe0839074833c9806a012b0e8324e31aa1": "1b1509a13d0d47b2069fa489216ac218",
".git/objects/2c/a865468adac29a2c959154aa2fc75f168ac35a": "4f41186a8c755a5e575917f8d52c1611",
".git/objects/79/bc1b4fefc2d46d59ad1263729464d68ef43bd1": "932fc0edab9e90b9ba19422f4f09a8f8",
".git/objects/2d/861855bd6b7ddd916f4f68161f0e5eb36817b9": "737ec37c7a5e28cdd180cec140c9c3df",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "24a55a55a467d7195b6eb59c4f31d32d",
".git/objects/77/5bab03d9f8190e34ed08c38261499c60c2162b": "1f9bb894c6b1ce63ecd63bae18d67baa",
".git/objects/48/2d87597439102a787f95cc79ee656b8fd9dafd": "97c42c41799bb4eface262a6b4279e58",
".git/objects/84/ad64861be169eab5280cc3fc3fc54ee6b0ccaa": "d5d474f23f1aa2527acd990aaf36224f",
".git/objects/24/b9ce948299e2d0491221fb2e6db2d805ae9b1a": "972730a7fa08a3815d913faf1d56574d",
".git/objects/4f/21db307e66463d05b7ff2acee9141b128d96da": "85c7da66431faebe4f0c58e44b8afe96",
".git/objects/15/803356a1429e02ff4442be86fdae61b27e457b": "05c6e51d60e026fc98415b586080a228",
".git/objects/15/eb85f416de0e1273d7caf66403752254ae2a5e": "65b319397b9a02ba1025617faae0c7db",
".git/objects/12/9d344124dcb1f3bb94afb7ddef96a42c71799f": "5346ea87fa9c706f2f57ed8159c0502f",
".git/objects/8c/eb178626743dcbe6f53937729581156688d0a2": "587ce2a65910d7292fafce34ab633c79",
".git/objects/71/0a2c0e417385260b344a832f8cf84aef6f31d7": "165cc55e1aab3be3175d615fc44b6c57",
".git/objects/71/075d67b508871bf62b55e0734b4a37e53b1129": "e55ff1dc1f30f6ea24d989af2fe5d5b7",
".git/objects/1c/8d6472771416358c8ed723aa51c4d7f8d3f48b": "ebb65e1659bbd9dcc5dcbe7d3981c8c2",
".git/objects/82/034f525a4c6f35a5cef89fa41a8930b7a98132": "33268a0ffffbe29fb2a5a4942e534576",
".git/objects/82/ae65fb27a10be1df2a3538dbdea8131093f379": "3dcdc9bc0f4571af865713b1a187ff5e",
".git/objects/40/964715c35df50199a8eedf7714a5eefeb3720c": "a9a80aeaacbd4ba8ca07f6c4a10f6d8f",
".git/objects/40/f4a6c50fa3ca8ccf7b713ac906e5b89c85d43b": "3cb10087bddc74d6929ddb92798ac27b",
".git/objects/47/e179c5d1e1a12c7ba78b7de2f7fcbb0e652125": "f8a687441504a6180f62141997e6ea92",
".git/objects/78/51f3a7a7a2bd3a7bc71e85def0a72cb64db46c": "b7a5c1e3fac4133cd731e6b74e4c678b",
".git/objects/7f/41f180facba0ffb7890211788accc7515794a3": "1041bdc5437a2e7d185e477f421d956e",
".git/objects/7a/be3b1f757e9f5a77ad71e29c4d84df68285d27": "791ae9931d31cce2015df11912be3a25",
".git/objects/14/e99586bb26a72ac158218e06a66bd5f58c1923": "b3c98d5a7afc543eee5c2cb891b52a7d",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "f8f5e768f4ef89c05f64728257742ef2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c7b52e4bb050705e48386a2ee257d8fe",
".git/logs/refs/heads/main": "c7b52e4bb050705e48386a2ee257d8fe",
".git/logs/refs/remotes/origin/main": "c712e834d4f0b583fd83dadcb053380d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "45444ba263bd6e68cf08839b180f2b37",
".git/refs/remotes/origin/main": "45444ba263bd6e68cf08839b180f2b37",
".git/index": "b1f6ebbf1822176339d0f9c1688a09a9",
".git/COMMIT_EDITMSG": "20f3fb78b55f1b9a55d6a4fd0469a924",
"assets/AssetManifest.json": "2ea7b1f09f000952a0adcd1ae91cb263",
"assets/NOTICES": "5cb86ec754e16a80c19cfc8cd1db7ec4",
"assets/FontManifest.json": "bb010e71887df5ebe15353a88a44e757",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4ee8c8477fd2785d17e0e1a136d03d1f",
"assets/fonts/MaterialIcons-Regular.otf": "7bff7b03c7b17c9043751eb7a423fa1f",
"assets/assets/images/parcela_infectada_2.png": "770bc490eb2f8eb145fdd76a53f3faa1",
"assets/assets/images/1080_calavera.png": "e8307f60a3ec5bfdddd1490504b6aeef",
"assets/assets/images/avioneta_v2_3.png": "2bae263d18fa8a506dd9dd418bec24d2",
"assets/assets/images/fondo_completo_sin_nubes.png": "556b760b78b6cdb3803482a5e4e0b796",
"assets/assets/images/avioneta_v2_2.png": "891a9c6203c5bf3ae50593ceda46d55b",
"assets/assets/images/parcela_infectada_3.png": "9f3e695d9fae7fef2e0e188c6e39b899",
"assets/assets/images/parcela_infectada_1.png": "653fa6223c2ae39b55eaf8c6c65dc15e",
"assets/assets/images/icono_maiz.png": "b13fd585c357ace371e8f0d7388cfb84",
"assets/assets/images/brote_1_solo.png": "58a56e4cdbe6c8d153c13700493732f9",
"assets/assets/images/estaciones_PRIMAVERA.png": "f5ce986d95f742501ad9e08eee0a9b27",
"assets/assets/images/beef_with_tomato.png": "ecd7e64751925429cc65370fbcdd9a94",
"assets/assets/images/cultivo_muerto.png": "af2e13579b4bb880a27fa43d2b341a25",
"assets/assets/images/avioneta_v2_1.png": "bed208faffd30aa8cd34c8124b9a41a3",
"assets/assets/images/parcela_infectada_4.png": "552f9bd7ad0342fdd9580b80fb70e4ff",
"assets/assets/images/icono_fumigar_1.png": "a4e1f527a0d755e092f2af9d9749f475",
"assets/assets/images/720_fondo.png": "6f8cc5731641a415587dd6fbc3f2a1a9",
"assets/assets/images/fondo_recorte_1080p.png": "0e7012e5d74b0a88cb895c573997ab9c",
"assets/assets/images/avioneta_v2_4.png": "c3af5c87477264fa395f75a47367772a",
"assets/assets/images/icono_fumigar_2.png": "3417060844c84f1d293de2936c66a152",
"assets/assets/images/3_tierra_muerta.png": "012e19cf2c9a9961a7d02dfff9fdf17b",
"assets/assets/images/1080_fondo.png": "e14e2bbff3be5f83b2c929503d9ac554",
"assets/assets/images/zanahoria_1.png": "2eb177d6837137a510d2912ce6daf58b",
"assets/assets/images/rucula_2.png": "6dc9697834f82b1f653df6933d318695",
"assets/assets/images/pie_de_dialogo_5.png": "192e9aa9b2a5a26552fdcef761cfe9f8",
"assets/assets/images/avioneta_v1_2.png": "3a2c34e2ea1a38ce05cf343d4e976b6f",
"assets/assets/images/1080_game%2520over.png": "08cc9df74516e04175d1d1606092d9e1",
"assets/assets/images/fileteado_esquina_4.png": "51f1b5b138246c2a38854a7ea0830076",
"assets/assets/images/deco_1.png": "7c8db6deb3817cf5570007a14fae8be8",
"assets/assets/images/carrot_pie.png": "e829034c225be217bf09ceabad38403a",
"assets/assets/images/icono_recetas_2.png": "d366111e2bac73bcfe33404bb8406d95",
"assets/assets/images/pie_de_dialogo_4.png": "befb9bd758f6fb21ac8fc7731e45cc14",
"assets/assets/images/avioneta_v1_3.png": "88627d7c40192ef7d4377db0accc95e4",
"assets/assets/images/rucula_3.png": "559193bee4c42e5bb9d7a998e14f6917",
"assets/assets/images/zanahoria_0.png": "e95e612b7fe7d230997d9359a97a6fd5",
"assets/assets/images/rucula_1.png": "93d5a398254b90905805040d9cb55038",
"assets/assets/images/zanahoria_2.png": "f843915db44087ea05b795d6abd53f4a",
"assets/assets/images/avioneta_v1_1.png": "61b5f736b24f9e5bb93d227f10ea24df",
"assets/assets/images/personaje_grande.png": "43cb5f4af7efe09ac9e98b6ba5a3aff1",
"assets/assets/images/deco_2.png": "230f9e61d5b7bdc6c89b91f179ce2081",
"assets/assets/images/deco_3.png": "8ff86d92c7e19224c7a80743c7b19c23",
"assets/assets/images/icono_recetas_1.png": "4eaeccab14ad6591b58a74e7687fc543",
"assets/assets/images/zanahoria_3.png": "2596fdbc6758e8e495e16bffba8c7a3d",
"assets/assets/images/rucula_0.png": "a0c8f7e27a43136cb26464a120de4136",
"assets/assets/images/maiz_4_solo.png": "2d33b14c68d7b17b2c7481d2dacf4aba",
"assets/assets/images/pie_de_dialogo_3.png": "70316ce514f4c41cecef14fc8e3ce18d",
"assets/assets/images/avioneta_v1_4.png": "cf3f28e29351f2b924f9c4c93f8b1722",
"assets/assets/images/fileteado_esquina_2.png": "17a33284f796bd3653e644ca9f223856",
"assets/assets/images/deco_7.png": "8bf3a99d1897bd572f5f3b0bb11500eb",
"assets/assets/images/deco_6.png": "8c29c215168d1a41044a6aba915fb77b",
"assets/assets/images/fileteado_esquina_3.png": "c07844d95b77492615799c1867716c37",
"assets/assets/images/pie_de_dialogo_2.png": "df5442e1384c9400eb673dd27a2adaef",
"assets/assets/images/estaciones_VERANO.png": "b6d97cf410f8f8b3fb617d0a9aff89b3",
"assets/assets/images/tomate_4_solo.png": "c3f7edb2a40fcac27927c669b4f0be56",
"assets/assets/images/fileteado_esquina_1.png": "454ac2512bc8bbcdbe63aca34c86e2e7",
"assets/assets/images/1080_pantalla%2520muerte.png": "8ef8c9ecaa97f54965bee63c5455debb",
"assets/assets/images/deco_4.png": "376efe49271a9e1ea837c19a8c6e6e24",
"assets/assets/images/deco_5.png": "145962f73d4f9d22df4abed80804d752",
"assets/assets/images/pie_de_dialogo_1.png": "237f7bb108d53022eeef555fdfeb1399",
"assets/assets/images/fondo_completo_con_nubes.png": "bdf83b03c80d95cbc1534423a19d6c9b",
"assets/assets/images/heart.png": "e355288d98af493415a6e32c27939e35",
"assets/assets/images/maiz_2.png": "c6a736124e3e2de3d1ab86cb60e8173d",
"assets/assets/images/deco_11.png": "86a5dab5172e79600b678e756a9d9537",
"assets/assets/images/deco_8.png": "6d46426b6709630a04b4bb0efa827184",
"assets/assets/images/deco_9.png": "671b156336f6da21598ecb67f57b2595",
"assets/assets/images/deco_10.png": "487d92aa9bf283c6a5dab43437301d81",
"assets/assets/images/maiz_3.png": "a2b36975b346c7202f08612d1516e281",
"assets/assets/images/maiz_1.png": "07ff18579b9ceaa6ebc3b8c8f3c73c7d",
"assets/assets/images/deco_12.png": "6f8f8e2d5c01ae62fe933d3703acd4dd",
"assets/assets/images/deco_13.png": "d3df432b55dc96573fcd1ba7ac54d3ac",
"assets/assets/images/maiz_0.png": "363775bf21158e67feff75b89ecfcdd3",
"assets/assets/images/deco_0_GRANDE.png": "6af0700adfbc35f329002890fb826954",
"assets/assets/images/2_tierra_brote.png": "cfd94efd4cfa3ed9d5e92b1aa6c5b327",
"assets/assets/images/icono_tomate.png": "60aeb57567f530da81cd0a85a83f7b0c",
"assets/assets/images/720_calavera.png": "b603fab7e81e64fb89ec6134ed2a8315",
"assets/assets/images/cotiledones_1.png": "0168365548436ed0f82f44236de66243",
"assets/assets/images/zanahoria_4_sola.png": "41aba51443f38003e0ae789cb781da7e",
"assets/assets/images/1_tierra_sembrada.png": "e68e0f3d15fb4d41566a3021125b7c7b",
"assets/assets/images/estaciones_INVIERNO.png": "fa0e105c66c8fd8323ec45490dbbd155",
"assets/assets/images/720_pantalla%2520muerte.png": "0275ec8199fc7285514a1063e0e4a71a",
"assets/assets/images/720_game%2520over.png": "62174845479e1fb0ab367f3f686acf66",
"assets/assets/images/0_tierra_pelada.png": "5175c29266c3bec5c7e06a8e339c76e0",
"assets/assets/images/casa_camioneta(boceto).png": "72f74ba0d5bf345c8314727cb52c6be8",
"assets/assets/images/tomate_3.png": "03319de3285ebdd76ac95bdae3d58d0e",
"assets/assets/images/fileteado_completo.png": "723bb271e5e0a6ddbf8ed202bb623111",
"assets/assets/images/fileteado_vertical_1.png": "97092671812cfa32825a4ebd6a4476db",
"assets/assets/images/fileteado_horizontal_4.png": "4a04ffcb704c66b4a41fe2389b4c96c0",
"assets/assets/images/720_pasto.png": "e50156a505300f7bf803af6eeb9e9bbd",
"assets/assets/images/tomate_2.png": "b8af0d491a709204bf51418f4a6a4c30",
"assets/assets/images/estaciones_OTO%25C3%2591O.png": "77257e467f7ec8e8daea93114ceeb5b1",
"assets/assets/images/tomate_0.png": "c63357acbfac649e452099325025bf06",
"assets/assets/images/1080_pasto.png": "56748ef5108f9302763189d5552dab41",
"assets/assets/images/fileteado_vertical_3.png": "8b529daed0ddf01ac54ba358962ed93e",
"assets/assets/images/fileteado_vertical_2.png": "3b5d1109c27ae610d3617dc5f4292289",
"assets/assets/images/tomate_1.png": "37174dbfb16d91267eedeab3062bfdef",
"assets/assets/images/fileteado_horizontal_3.png": "9dc929d1da6432e2624fcbf980d25f30",
"assets/assets/images/icono_zanahoria.png": "8c25c462221dab6c1a8a3e585785d2cb",
"assets/assets/images/icono_rucula.png": "b01b42b8eb0a569f6f29e03f83bc47ae",
"assets/assets/images/fileteado_horizontal_2.png": "0d80932ac1f9643480ff06e816829c75",
"assets/assets/images/personaje_512.png": "bb849b26c837b42f32f60444cf61cb34",
"assets/assets/images/fileteado_vertical_4.png": "851981e5f7b88439d353098a4c35acb6",
"assets/assets/images/fileteado_horizontal_1.png": "c0b08c5473117030874bc6ae2668bb8e",
"assets/assets/images/nubes_panor%25C3%25A1mica.png": "fac4e2dd213dfe4a843ba5bba1e70b9d",
"assets/assets/images/fondo_plano_1080p.png": "70c81b9469a7b9e36ddb4ebc63aebfcd",
"assets/assets/audio/plane.ogg": "daff60cf01e15bb2e7397c55c8f8f068",
"assets/assets/audio/touch.wav": "878d556ff80c562c42daf2a395b6ee19",
"assets/assets/audio/heartbeat.mp3": "52db9c69fefe77865d63176f0e097d2c",
"assets/assets/audio/music.mp3": "a041a9c530378af2569c901e917a5b0c",
"assets/assets/audio/seed-planting.mp3": "b91173839bfdb8a2ac64199e02bea3a8",
"assets/assets/fonts/Crayonara-Regular.ttf": "fb872c9fdc3d682b63282e3ad99a2e73",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

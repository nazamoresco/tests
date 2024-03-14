'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "db9b455094bb834fa4b58fd29e7fc261",
"index.html": "5caeb3f78702b0ca8a630f56c8a15384",
"/": "5caeb3f78702b0ca8a630f56c8a15384",
"main.dart.js": "165df8a77c7e07bbbfff77d735fdfd03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b4f61090c8889b3853267a47d4127dc",
".git/config": "0fe7810d0fd28e8dd2387660ff1f61b6",
".git/objects/0d/7c7200de7fc8610d2efb71b663faad774d235a": "91b94a60f8c27171f9a3a9a0cdad2a18",
".git/objects/0d/ba68bbac331bd0dcbb6ff616481e7b9b41a577": "e25f302b1b463485dc44ba4667d1d7ba",
".git/objects/0d/164cd01b7c1f74a553874e4e48b4d8db296841": "95b5862c273af3f0ce3f6459f8f0255c",
".git/objects/59/c5d76082aba2ac7fe4bead08f9a3316e257978": "08c5a6cedbeacb6281bc445b21abf099",
".git/objects/92/50174ad2b0baa21e9827a5d6c098bac614df7f": "e0307a254ca31f02a6cda51c6084f604",
".git/objects/92/55c0d6b75d273c940083c1dc13ea799bd8d09d": "2d01effbd9066db4f033e0ba8c7985b8",
".git/objects/0c/11f484ebfd562b31d456c8fe8227d2755a0b02": "78c8f338275248ad819d000dd6c35218",
".git/objects/0c/509540e194b24d3844dc37872ab50b0b339974": "b437fd842ae7279f80f00ccc239b0780",
".git/objects/0c/261fbfbbe49e8217d9176dd712a7ed0578daad": "adad1132fc15b535ff2c297f22bc4443",
".git/objects/0c/f4c8bc82320360c0efac278682ff4d675d5716": "7d3ec95fdf193f79273edf1c55498538",
".git/objects/66/97518c0eb9e0545e356c4e5dae5c0b699edba8": "261c1b0c988420402827a7fe94faf7a2",
".git/objects/3e/0a80c661e2a2e29effebf51b7b3b1e28844130": "2d54e0cbd10bfaaf764714b25380efd9",
".git/objects/50/08826600db0e01491c30d67601a757e3e23ce1": "11588b4ec76e9f0d19951df45ef75b4e",
".git/objects/50/c1bcf5739c3aa95d5f45ae0377b0f7042e3738": "0116592e6de5fe180479329c9383f64c",
".git/objects/50/22a76a8bf97912f48dad2231dae025530a369d": "7b532a9719a94b9acd0318d3774e4e16",
".git/objects/57/5b9bd78f81b34f92cc65c09d74bef9c68577f5": "030c104c5ea66fec61dabeab7279f503",
".git/objects/3b/1b27a3f335fb1f1c2f1d97dcd6713a58d2b4a8": "d3e51112fb443ca8735e5fac1b8d2ece",
".git/objects/3b/bead5d0e6aaa7de0134b3d7c2830989f4bc665": "20a42b19800c3a3c6dba0c1699c0a04e",
".git/objects/3b/1a2b6a9d75b545084dc24bd8d22a44f2869896": "b862b413cf65046491fb6313895259cf",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/03/4a633dfa437fc6c686491062f82d00784cab86": "cb05d86a67f6e1bc265bc1c0eef990f2",
".git/objects/03/bbb9ad8bf06c79081acc65a93180267fdd08a1": "50a1bc582f48b3b532d0400a90e18ad0",
".git/objects/6a/3d68f090c5ac8536e3b897647c8f4465f73c63": "7f06284819279bbafede71bea77ed1a4",
".git/objects/32/f88e01573ac2a547432192856b89191368ccbb": "d34c8239c873fc17fa23bf211fe1781a",
".git/objects/32/e66d32617680f50f945022a52d2e58cfb617f3": "edc2fa1147f0e9981664dd844b027323",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/3c/aedaae3ec3bf95f2d4b2314c42ac143fc3ad6f": "70be04b3b5e87c80efa660a9487b7ff8",
".git/objects/51/500313fd1a67b285581265be5cbdf84c5a1439": "7fc2d52577f180450b14535f7594ae2f",
".git/objects/3d/f6d2826e4641d1392da61bdd15e3f9abaffa7b": "fd211d33814a3ce1170aca6f34607e7d",
".git/objects/3d/bf02fe4358a8db4c7081b763a01b44faca46ce": "8261f9979884cb9c012cc4cc1252d257",
".git/objects/3d/08c927ff055220ff11dcef3533d0884d689eee": "ccf71212c9f3a23723cc955543d354b9",
".git/objects/58/a445786ffb8d6967f8e0a0df77a7c232583bc1": "efc5a751620b83570e8315726a147201",
".git/objects/67/58eeefbaa5a92eacc42023bd5bb6f8a098e861": "fc612ec550eb349d872e8c65cbaabbe8",
".git/objects/0b/62cb784c9b726cbea463050e4b2f8780c512e8": "aa2b10bd226310d0871c0cc5a7a066ab",
".git/objects/0b/751d5f6df738441b9cec6c75e21fa5ca6185fe": "2fd717da007d972a72c4ba3480513e40",
".git/objects/0b/91988513f08d3c3a15b048eafa5fd7e84cf21d": "5fc16353ca913137e245c33e63e8a5b6",
".git/objects/93/8404d93ef7044909166aa038c6ea7e812e8b58": "c125ec313189da197c09b80f90738655",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/60/f6ef7cf837d4b26d833ea0633d61e43aef8961": "b7dc473dc28ca945831dda6d340641fa",
".git/objects/60/d9c7cfeeac34ddef029e1a7dc3eb93a4c530e2": "2214f28feccc5e0c463e29d668df97b3",
".git/objects/60/6ac81aae94ca489f28a532a706dedb83905e65": "5dd80da6305e1574413eb2310b46ae28",
".git/objects/5f/9c7124e16ed312356309989001140736a89b24": "548d4922ad56cce8d55fa9c819bddb1e",
".git/objects/33/6e0f363c098bad3e71ab273af9267e86f3b24a": "3490f41c8b4e28b936feeaed4883aca0",
".git/objects/05/59303012f40adfabcafdfb75ef84e0bc213b07": "62de6de9255be784385b3214281656bf",
".git/objects/9c/27c206e92c2ca26f07485ad9bbb344814b2f4b": "8882c843af694cb504513f97251dc9a7",
".git/objects/02/34573fdefd28191d86ce0da2e7380ea4718de4": "351feb65c89886dd3a90b0b1ec3d9345",
".git/objects/02/ed4d336e7d7166830cb7adf48cc45b1de184af": "c748a987249929ca43264d0ae734d65a",
".git/objects/a4/93e9084461cc473a6d2fe2e0f9cdeb58fef361": "18abe57f45c95642404e2822215a8ee5",
".git/objects/a4/77c8e2d27e8aeb58b092aeeb6a6f6ba0af8801": "750dabe38dd5cb729daeebd6c77a2e0f",
".git/objects/a3/0a671712cb94f187040fe139ed9ee5b16b8ea8": "0f49540181f5060110e57d2030f5bf2d",
".git/objects/a3/901bebcad39fac2536dfc0e20523ad14f47bc7": "9c970c92266d8519a64b2048ed743bd9",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/b5/2b39adeabb1f5e32f476903f20690f93b2a43b": "4cc9d1ed6ad8d5bda4fe73431b8d2394",
".git/objects/ac/ae264c3caa0af40a815252bdf43e06778431f3": "ff4e1fdd5e6b9230195328c8c986b19a",
".git/objects/ac/72820ab308036a787f6630b79f28eeb0835a60": "5bf3dfd92b7f50d0abcb7a2d3774a83e",
".git/objects/ad/0dc2906e9ab482f91de896d73aa3ab4f9e25cd": "2cd3590a87bebed0693f5ecaa52499fb",
".git/objects/ad/06b90840c2df14ae29377de503ec15a8ce0d08": "932a73af169d21810920dddc138696cd",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/d7/89afc765982b832ede455caedbf2785b026056": "d7d4358210e5d8bbe24e5d1eb06dc825",
".git/objects/d0/b6ec460da3b6c5da0b1aa176c30390ec4f4f4a": "a38671849c719f6c74924017cf9631bf",
".git/objects/be/04829cd66f73ac474a956f73a5703b254167d4": "3a8994fe4dff0a371637ba0e6b577f93",
".git/objects/be/eb73ca057f549b514eb05d1c1cbfae12344e79": "0e3c02c95b32634c3f15676cc68a502a",
".git/objects/df/f1c276737ab48d26847e0b89b3794efa8bb847": "fd1a3692dba2f61665788c5fc6c9ba54",
".git/objects/df/3f5a515e7b5d4e82985a79ff96cf9e70ff1b72": "4580f157f33a3a5bc1a11c084b16eda9",
".git/objects/df/12e1a14c9de45c8e935e70298f373261c4bd1c": "9d2dcbd866f47b80f2a851dce77e2848",
".git/objects/df/bd419c5c8ce3f945e317de0601cf49675a7807": "7cafe6a111f48e6cee45dd6085030b70",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "534f3183d78a0e2c26089d1cf390b6ce",
".git/objects/b4/8bb0042ecf54cc9dd478a61ec33fc17f3a341b": "cc4df83742c51ab0f711921b34413ce8",
".git/objects/b4/f8be598ebc0fb80a01bd68249392bd35a2d2bc": "e75c1f138e534679611cd451215e912d",
".git/objects/a5/27776d1f04fd78c716698efa119f81c275dc27": "acd2d486f7f4bdc6890aa8994c05aa58",
".git/objects/bd/1b32d3d9a32d8b2a04ca5e36bebdf60e301400": "ed244ba5e8e124e2fc772673021eedf5",
".git/objects/bd/d62fc61afdd01a92045eab324e5b889e563302": "e47f6ed35e9585a8e3ea827491adabf9",
".git/objects/d1/e3c2af0ae819922b585682d48d0b602f06c697": "6faa7e68f09b0fb0b31ae5fd1cd3d387",
".git/objects/d1/10f5b60cbeaeb48ef235d9f8a158db585a1242": "51db4f428ee4ccf02715405c678e7ac2",
".git/objects/d1/65bb51fb7bb01ba8b432fe4f17492a1f1796ee": "bb617dd378848802221a8cfa5d21dc3d",
".git/objects/d1/c5d873020219fd6c007c763b14741a7bc5f006": "c40c838d732f9b6561d3cc9ed36b736e",
".git/objects/d1/1eb3c607dd1873a892fc1b9689ff4515d0f5cf": "c90cf8e4a45abfe9e9a1cc7ff8b5f10a",
".git/objects/d1/e061c2f8e1d97482f611e93ae359f6efe06841": "baca01b6fffdff70882b54d2adabbb36",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/72a2d1e786f1946bc998a42b9c727782d63937": "10f35f370400ec857e44b43be00dea8f",
".git/objects/bc/99205b0658fc89826de236fd7e18eec35a2470": "5112d3cf559cd6ec8f7bf93d9094224b",
".git/objects/ae/09235b0f8ac0f1490317a2cfb16b22c09a1e48": "09bf561bbe04a4d3c98d23df5421131f",
".git/objects/ab/2328341823a88543bcb5e990d6d26537e60c2f": "a25ca15866a376375ccfc09c56949149",
".git/objects/e5/084c41d8e731407fedb1c078bb1c2267932f1a": "3ff14bd4a857e5df0b04921002e7d6b8",
".git/objects/e5/3c4b65942e1dcc0f94d9cb7f9359a5515e4ead": "2c4d15d6d0f571be1444529c8971e844",
".git/objects/e5/88979754c746a8e403527558f73ab54c6e48fa": "9033e2a2d5aadc5e7ab6ac2c71e3c735",
".git/objects/e5/d3cc4c079575db8a0940dcd9531d8a4b3f4665": "a8c89cfdd10a304d8b9e9ace2143f638",
".git/objects/e5/288110e8ea6fad91e66659ca124f3a1a044c8e": "e36c206b56c87ee2eef21dfcf5fddcd8",
".git/objects/e2/1dab20ffcd4b2a24d79fc3b699e620aa639ee7": "6ccb58dfd4b1e1a6a4f07cc30ea5367a",
".git/objects/e2/a8cb12a791023bdfa136f3e72f7b81730ead07": "ed9c8f70f3cb9e24270c12752b7e8e03",
".git/objects/f4/a1e0871b72e13274239dd025f7a0c1d5888e46": "3f6f45ea86ea0e8c0b16876761d92fb2",
".git/objects/f3/a9e1e19b45f17bd63f06f0c0acd7035829a445": "a67d5369855061edbbda6ba9d43f8ffd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/ced55a5ba13bc6fd34e75b1184da5845eb1e3b": "2dda763a3d93af0a554bbdd00e2d873d",
".git/objects/c7/bfd0e4de9dc531415c0163f57e30e425fd60f8": "3afee3f2aa7c0ff08bc884e6c57c2891",
".git/objects/ee/5ee61dfcba9e67f716553d86ce4ae99af6b7b1": "658ff2a7ada9558314fa064830143e9d",
".git/objects/ee/0be74d1226d9d9be7e933282859ffcf73bf9db": "0314d1f92c5f0ff5f9f7f398cb1a8959",
".git/objects/c9/98f02664f8af4862d4780e66a450b7ac584dbd": "61ad175e9c7834075d6f9bdec471f281",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "beec33a20a19d6c9a511dc88932ab054",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/061a513b2bf15bab72609106014be235f54c4a": "d491c74d127660df3d822da9fdd576a7",
".git/objects/f5/9c0f5e43a1b207a398df1488e17936cbbd6886": "aaf6f1be6ed9bb1625a6ab047190e56e",
".git/objects/f5/481b9c3d0a000386b40f3e64c46fd970715012": "f7b119090a4c639b3de9d6fc9429e3b7",
".git/objects/f5/c612aecfd17834f901e190e0cacfcda71238ce": "8db109d71a1cdd9cae9c77690cd5ea55",
".git/objects/f5/2aa297e8a1df28f5175c424d883d0314de5d20": "e3a0ee546b578565b9b27c3f35a243af",
".git/objects/e3/6faf91985b929b369b37b1accb68b4d8df8050": "d87b3f520f90a9d00956b59d0575c4fc",
".git/objects/cf/a02be5ef9fc6958a2cc2f48dd5dc490250d4cf": "b04fc3d6f7772e99130a62e39d229655",
".git/objects/cf/565d963d655260c72080f52e8a4c580c51f726": "52acf2f11e3941a2a0a09cd280799a99",
".git/objects/cf/8725d6a380789e108634e50eb745f5ac01d843": "8c6eb9b29aa4c4238975d2c310278686",
".git/objects/cf/922b43a988947382159626a596a1f934005366": "aebf45a8ea2a43bf39169e6e942f3877",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/c8/cf14fa482e85a54dfa69b297cfe3bf5cbd4cdf": "6148615ecd64877ad8ee4386dfb611e8",
".git/objects/fb/124c8e8b353a707ecd970552457fb8ad458297": "79a226037f89d496b771162bfb86bc31",
".git/objects/c6/ac02a21b3a45093fe4353fca521b13400d16ed": "42419e57c162605ebcbb59ac4b29e441",
".git/objects/c6/60b2f5f5878141ac66962f0e76b8bcaa75dd04": "57e08371bad09afb04c8c94bd7ea3361",
".git/objects/ec/47107aa49b667b37fcf28ff6989ce370f31ee5": "a44112ac2ad91a96550ab1421cf231ca",
".git/objects/ec/afcd1aa6ec0f553a3bfd9a3b33889e37e1bf0f": "4929acdd00a65cd31bd9688ff6350e13",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "8e902643fee5a014eaac2ee064eafb5f",
".git/objects/ec/6cf67b39e194697c7b7f3de135ba452a55f873": "63d5743332d99aebfcd7c6636d707169",
".git/objects/ec/932c5449624d12c6abac1505519870ed0b4511": "faea9868e5f3234b404f96cf784ddcb8",
".git/objects/4e/82feff234a9b9fbca23d2aa549836dfd4de441": "91b3a2377f317352316938eb8794ab71",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/18/62e32948579f10b15b77fd0f7d887722563805": "2c395efceff0804834d407f99e17054b",
".git/objects/27/833da83b03734d0fc39534462523184e57832d": "52d721b6aab3e928cc18fa29e86f3efa",
".git/objects/4b/e1ece8df92aadbc79464471f702682e610e7da": "13f491c2b37eda712a75167fdae8426c",
".git/objects/7d/3235ae30b62fa76a3776535696814e056a91b0": "7c5cd22ae11fe557ae858e547bc100ad",
".git/objects/7d/db28e466996519f049a91771e4d2eaf2d54ae1": "b75641cdc0c0edfd23246c529885b6a4",
".git/objects/7d/491c3edf14778897b9f92fe7db916d2a69c8a8": "ec5face137341948801017f41516c568",
".git/objects/29/b13f72d7f6c6db008a8c8e002aa15a78108ad3": "70bebbc2af3191ae3901545e8b2d2b25",
".git/objects/29/d9357e01dbc7769ca88bbf5941675be58a8813": "23fb009ea62b87b29fdc237d1845fcd1",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/42/5a416596d13117781863886ed025601cb87fa7": "394dc9ce441e4730b107d628b6809b18",
".git/objects/45/eea006cbd58e7807e2a12c63c258ac3f801c59": "927dfe6e92be229dcff1fb3c69c6c0e8",
".git/objects/1f/642a4b10b62a6598ef7a0fcc988c5d61398c28": "66848d07409ea4ec77a30de9b67eb3e3",
".git/objects/73/c3d9b7ba9169dcc69ccbcefadc6c3ca08690a5": "cbf01d29e4cfc9606bf2da05dbccc124",
".git/objects/87/7908854da0d28e9d4b4bc053d7c5e6a5f8cc38": "774814e1360fd68588676da250d36e8f",
".git/objects/87/c0e867ad1fa6190e87ea818ffec3ba186599cc": "f590e717c2acab23ecc69f8e31be2b68",
".git/objects/80/d45570120c30316f3d0e7828a035e2ab73cf63": "d36da04c76de5583ef6089c7952b13a5",
".git/objects/74/d6049c2bcfb5a2e2e1bfa62c082ac5d46fc89b": "0bb3eb7df21b84daf068c6fbca168663",
".git/objects/1a/4614f0fb018978fbb407bbd198d379d544228a": "42544c8355de9bec67ea39ddd257162a",
".git/objects/28/9f610a278a491fb44e8c994f01aa103306b26d": "182ff1646584c004e3cf28f2b73ec6d3",
".git/objects/17/9f8baa4a1d50f03d62dd6481e98bbfc5e4660e": "884e618ce4559cc5e416fc760e3a9a52",
".git/objects/7b/c4152522b1e96272f98267187c2023f700c0b2": "e62275d0f833a783ab69dbc63ff8d939",
".git/objects/8f/cef716fd635314e8bc5b615f8d6056438a274d": "d51168dea69fd136aefdd7687db4a77d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/eb9bbcf648470a24fce63eb1cd02925aaf38d5": "82d4b270869bba720eb635a01bc4cc40",
".git/objects/19/e1b0e53ce1297b108211e8c2f4847df464cd1a": "9714b14dbb48aa288b171e61b8ae47b8",
".git/objects/4c/a312901605e39fb581f604ba84245052284831": "57a4d3d0fa3fe8ec6010fe965a875b36",
".git/objects/4c/fd571adce4c0bfdc1acfab31f89da7e008906e": "36f7047b5f981573ecc2b038fb697b17",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "35207f93ccdbc5de5e18640f46b36217",
".git/objects/26/2e0ff09035ed19549305424e8fe4e4a54b26fa": "2e895b52e228b9ae22f73bdfd31cb7ea",
".git/objects/26/5c987fff027909465cb897fa5212bcf11658ac": "b6d647945ef343822eb4917b58467f94",
".git/objects/26/57036ca9d1cf7243914302d9b90c26048b676a": "92b51917d03c8eb4095c9967490862c7",
".git/objects/26/530a6d7924a1a14cb1e924d9f475d832be3517": "87b3001e0671bf38e0ad2c4d36bb76cc",
".git/objects/4d/dde59afb497c2b68441746feb4fb64bca14a45": "e78c6740d489ae967c65e32828e8e2af",
".git/objects/4d/bdf400a1feaef8114804e098c6f1850515dc49": "910b4b18703782a61c4ce72e86394bd6",
".git/objects/4d/71db1c1b8894e904b576b378b409d1a192c7e3": "538da2c9a593d8e662229a1ada23689f",
".git/objects/75/54fb76c552b31f89df10219047a56dec31ecd1": "ec119957689d23464fa45122b4b852af",
".git/objects/81/29e2b62fa714573899ceca2bc0de0630afad29": "28b94e086eb16e76aa10f0a8fa730444",
".git/objects/86/242b7c3290b66cc7b10442d7aa41fcce740f8f": "195457eb06ba81792c2a02cb8c75b954",
".git/objects/72/4e778618069980c6c8da7a30048bbb8bf21ef4": "b1bfc962b316b6c2e46d7155b7c8fb53",
".git/objects/44/6f8746d20b9f8d4283c3279c61b83841697b11": "e368fe64ef2e05bd71ce97cb35515c37",
".git/objects/2a/38ce67e1962ac852674ff4b52b6e77e17307e4": "bf7d5f40845c699a04e9f584367acdbc",
".git/objects/2f/2d8af434109136a77a1ba0d16bf129e7d62f6a": "e8be49f1da8bb78cb50392a46f11ce15",
".git/objects/2f/666bf601cce3538be0ef9f883f84854d0db54f": "a0892d1b88dc3afec8f90e415d122d81",
".git/objects/2f/1d174698539f5cb9991540b64809ff42d3e1c5": "d711f404afed2d45d40fb3374235fb21",
".git/objects/88/1b0accdc09bebe0d25f4c39d6aca19832804bd": "9e08723d456932c6c640349e232be4d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/1a2433aa56179eaeee32410134424962c096f9": "ba357b683350717cb1589b37ef32b195",
".git/objects/9f/f60c26a96906889e19617b7bb41b7944412b5e": "09d065cc60362e3919c8b2554a556f80",
".git/objects/6b/2fe50116ea67998533c403d7c33cfe8b8a19b7": "09b3eedcf36581c8d9f0bcfe17b27dae",
".git/objects/07/d6e3da78ddd84bd0aa1308affc41db61e0e0ae": "d36207edd381f68ef87499a2ba66b408",
".git/objects/07/33bd9d54655bd2e48a4a27198c9963d57e1dd2": "993b983dca6eccacacda44f70866e5b6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/07/f3c6e0d0081da1cbd0bb7e7bd1c8f01f89798b": "e90ab80cd8327101481dae4a15b0f3b3",
".git/objects/38/565c1cf0849a0ee247282a95bf0a815c99eea8": "1bca20a7d53601c07d1dad78384d0e8b",
".git/objects/6e/8508dbbed2ceec94209b722203ba04e4eefbec": "1e8772fb17f77f3eb145ed312ce43eb0",
".git/objects/6e/5d0cc4bdf78b35630df0a09be275f1f9029767": "c3411461b1357192bb786425ec349aec",
".git/objects/9a/b9255027b1999d38136cfe2b0ffff80b3f4910": "2c71b720c385bdc7d57e664d2552d1a3",
".git/objects/9a/68ed2e7bec05e6abb70df98beb2a70a53d93e4": "c2ac028252078301d611675f2467f783",
".git/objects/9a/9b76390a3c97ab0f3eee7e688c7611295db36f": "f3458ee58b9228cbe9d9b69454a37d7b",
".git/objects/36/60fd9efedbd8f56c0da1b72041a49ad0863f06": "70a2e873596b04dc5c90e972b09b9365",
".git/objects/5c/67c7c654685ebea4e7140013dfba7b1c1109db": "bdb975e6a31fe5e56b8aaecf5434df3b",
".git/objects/5c/cd11369507d1c0ad63ab4cc5eecf5a8c832909": "02ac18f27feaf88757771b4b0779bb06",
".git/objects/5c/0f11f534e940ba5d4bd88dccbf68ed8e0654e6": "731b742238a2a1c2d0d4c04ad9707ddf",
".git/objects/09/98e92d24f01a74d0bd5e8c54f0a0d17ad11b59": "11567341ecd61a8391d2e564b724638c",
".git/objects/5d/0415b16f349ecc07d162870a7c8576e38642dc": "e22dbc298118dad32222bffcb0069f99",
".git/objects/91/e8dbd467a10459ac781d6d308e0c71e268cf47": "ff8d4d19d34f2164cc67149adea5ad24",
".git/objects/65/5d6c7258791a7647a672c6ac57b2108ea75fa2": "df9c64210e4040237e14318bb6a4aa6f",
".git/objects/96/de814f8f3a689323e2a282c632924da9e1ba74": "b34cca4671dca7c244e8564949e18e56",
".git/objects/96/2060282b948abb92a695f3a15c2745c56f4428": "f6977f27ba2715ca3ee4a94e9f9c4dc2",
".git/objects/96/e82856c410ff0e23399fd03b918ffea624fb33": "09525a1e7e933e92dbea6d161a95a3a2",
".git/objects/96/0c525eb3e885a848868ed7f7b9429ad1b7f1d9": "9e67211a23d3fa5659b8285fb99dc14a",
".git/objects/96/be5093fe353a2bc4d5ce6138319f144b138863": "926c3cb61f2910977726ee9cdef58c02",
".git/objects/96/13e28458bab1c86cf5460c0995b1510e6e28d4": "1620123b2d3b56818aa612ee63bdbefe",
".git/objects/96/c7bfacfa93df914c4826826e270845ac1f44c7": "f3ba382dd99cdca767eeebca90ca578e",
".git/objects/3a/57226fed2ff12d4b9bd81258e086fd5cf441ee": "44f42456b66e502f71aecf69076673be",
".git/objects/3a/c2cfd5cac56693110108e9b715b5557eb82eaf": "6c52be92a008e93c67dffee99c4106f1",
".git/objects/54/36d3982b4f910e5d0cd320b7808266006076d4": "eaefc03a1d719c44ead824bebde382b2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/3f/ecb20d035809d34361d8c38867e90f535651ca": "88d76002323fdebd194a1cfdb918729c",
".git/objects/30/d9c2e306e771d8c594bcbba049b3749cc0324a": "a6f2be8cf9d9b8b6e93319f7513d92b0",
".git/objects/5b/ace9253e78bacbb7b0106c1d0b49b326b293a4": "87cb312a75944feac2b778484ae2ea99",
".git/objects/5b/848424c4bd49d94698faa04aef7e2d52570dd8": "422923efa4ccf6a439241a61c800b291",
".git/objects/37/70358bc67793af6a2a2bf5d0d7ee05c217c941": "09da0731cd1db01161a726cba0ed78c0",
".git/objects/37/5d469b42fe3fd393560f247570b6b5a4f8c791": "6e185a76c3d457800b1c5d738f739e02",
".git/objects/08/f579e1d7012cbed6a1c2391ac7d8c8e5c1d85f": "d79a13982c140104193398266c83ba5d",
".git/objects/08/c6f35b20bd7e91c01118d639dda4ebcfdaf611": "41247bc1ad1131114cfb5ca8baff2b74",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "3a01ef425b0fc58744da0c6d47637c9c",
".git/objects/01/bdafac6abebfa10d00c3d01c1419ddfae7acb3": "56873b2e84ac3294184aa6be095ed0d4",
".git/objects/01/21f4d17033f7777c47642d153f6437ec764d70": "aad852e85893bf3d66635dded814f09c",
".git/objects/06/a476d4a1200a31dd18a23d4170ddade05f9551": "a809cda642e31552d261916da6ed14c8",
".git/objects/52/c5df318e9b4b7e2dd10e38f131b73552afcad5": "5e9fdd4dd428922f353cbec35b760cfd",
".git/objects/55/ac18a780a99c164d09c4cf6dd01b6d2e528225": "ef3514956918356f020f0d0132ed77b4",
".git/objects/55/09cf5e3a18409b91bf663b31cf2c7b92fbbc28": "57a53ec33d55971cc20a81c7573bc93c",
".git/objects/63/b8e302f8889df96bc4940d4b4549be92a1ebdb": "57c92a70608c6347a18483e3e233efbc",
".git/objects/0f/e4b18b4f52a27ff009c8c78ece69e8b9045015": "3fe369be3e6e6d00940aadb07dac4c94",
".git/objects/0a/183188fd92a6af5171ce65b4412cb2a5d45c64": "d30cf819f10a895005ee73eb143c3691",
".git/objects/0a/d4e9a13094295fe77200ab16bd4337ba6ba3fa": "e221c102e3c159ddaa7fb20710284f01",
".git/objects/90/7e86a2385574577263e57081be678e0c2230e2": "fe6c58c90338680d19039ad215c17759",
".git/objects/bf/021fe7818ecc5dafefe97c621a1198c9edcbdb": "aa05161a8500d8d8a47e2b11fb66d195",
".git/objects/d3/2386bc597ccfe095b3d6f2d9ecf5145700376e": "00eb84b7f853e8daeba41e71660cdc14",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/1e52e438575a4be5e090410aaee01296a24850": "4e0665c7c6e06268b41b82f8e4521450",
".git/objects/ba/d139fda65ec2138712722764bf750a0cdab530": "cb4b0548adef1cbe4524aa91bfac18d5",
".git/objects/a0/5f2f22358735988917eb188d49b293fbd918d7": "1c8fb6f8b2f47ac06963c7892b652198",
".git/objects/a7/b732789da7d5cdc7ad5d30aa22a0181de1f790": "10e90924293035df6a5b6ba0c05dc6cc",
".git/objects/b1/f3feff3b0bc4dd0139e33ef90bd8e7f87a85cf": "ddd8455a8de519a592de8dc9be82f280",
".git/objects/dc/f975f6f2da2f37d9505c4eba9fe64c9badb9e4": "6f3c8da1346717958c206cfc6ec1b0f0",
".git/objects/dc/b8c25e1df0ef85705b5c9d9ca70c2148b9ecac": "814cdda62fca03cb79be599c9a8fcb1e",
".git/objects/b6/42cfadeee5eec1cecdf7e92ce2714bb203eb16": "f99aad8dd896365f7e1ccf102037abcf",
".git/objects/b6/ad7603d126c128805a24e3ca849caae0047f8b": "4227199eda25fe9149534c4862dfacdf",
".git/objects/d5/aa870be205adbeb058415e7aa13405e147a41b": "4f30ac3bdb42d27f497a7bba27dafc73",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "294a7b35d4d4988884b36a893e1c0a8c",
".git/objects/d2/d9e0750d73c4c470590e21783c07591e042779": "255411ee6a24a7e849b15359108c3023",
".git/objects/d2/433e2275f9fd71152f48bf31bf9707436e97c3": "640dbb4d5ac0dcc6a6bdec53b9f0412d",
".git/objects/d2/2540bbc088808bd74a6376e350da8863b4c211": "d04cf6c35376db812a19ea0843514bf6",
".git/objects/aa/018141b2784af35b21282c8c0cafc21fc44f52": "e0dbd4c7bbdd1efe6d1baea7c6346550",
".git/objects/aa/4b3a34d5563f9bc587b367c9b5b74077f69048": "c434b204d940fefa98632bd70a23cade",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/af/e48b8fcfe7789bd5365645e32f67e6252ccf4a": "dfc0bf0d3126595b676e158ebe4bcef5",
".git/objects/b7/15a6c85aa8c0de2111daf8f60f8cfc3b3dd87a": "afc3ffc4ab586056c0e575ae40fd38f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/aaa49af28b064e255979f88ba8e3aef4854188": "5d8d659056e3c6a26bd945f18b5fe0db",
".git/objects/a8/def9f30bae85bac16d759bfccf459476e905b2": "38d1a2fcf677dece699b4fe825e70e80",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "ece6a0ff9a24a8f64dc6ea097b41ed92",
".git/objects/b0/f2c05a9ec30b82114f8de625370d8f87d93247": "d77216d53016041385de737a5ce8fd2b",
".git/objects/b0/02210c8bd6790ae509d148917abff6e3296ec1": "de940079d05af0707d673183f7d6d133",
".git/objects/b0/07999312e9797b423ab51b9db7b3c409b627bc": "761e025c816b2a06606f29a01f17e7b0",
".git/objects/a6/a05db44d5ae08d3721e437d090dce9980437d0": "506859b68f373ba0a144a71acd357ff8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/8c762a9081560880a56a42706306a540bbf3e5": "e42ac827fb09513d9b2d3ffc72581149",
".git/objects/ef/0618622fd77ec1ec505f18ae370c176fe68d3a": "2262176a30414d554fde5b37adb192f5",
".git/objects/ef/c834383d56e7880641c919e65170496e7f2823": "4eafbf6c5eb7e49edb2860cb855cc7cb",
".git/objects/ef/d0b76734c023db8588504bbdb4b72a9bc87a80": "7ac3dadebb0d7535eac87a4c4dd3497f",
".git/objects/c4/483a8512111491676eca185da9cd4f8521093d": "0d2e08cdf6268939190257fcd2ce710f",
".git/objects/ea/e66551ac1bcac01939e0d10904e701c5110336": "2895e9d0d3aaeccb0a917ceb47f4c867",
".git/objects/ea/02cb94d63a5264b1fa9a16440b0d5d6b7580df": "25b047efaceb897df4d56c5fd7503954",
".git/objects/e1/70c7b59dd68eeb8a3d8591cfe715bd03eaa1fd": "e8e2a1658df5880f93edef5e0f632313",
".git/objects/e1/11206eee9f44955fd06d4b45d9343c67f9240c": "7c1204998aff2b5fd6fa56c3f490fd2e",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "4c96cc50b9aeb60a827c9dd2f34cdcbe",
".git/objects/cd/033d8d30dae05ecdf411b7c9e871e0a6d7d751": "bb27d2d8a2fb7974acfd75f012e9c826",
".git/objects/cc/e38a2998073767cf34c02cb911d6be40fce313": "72d63ec94038d3a1dc2006ae354a6cca",
".git/objects/e6/b8feab070e9e9053f11ee9aee6a570002ca731": "3e99627864707e774b76e6d4b4b0fe73",
".git/objects/e6/96e974b12cd518656b32a0ff2b375030e50124": "9b26d2a451d4d10c6f9df544d8acf8de",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/f9/df8e7d24f35887414d3a0dea902af9d1a7f5d0": "345660104d5c49869b8d6b6db902afec",
".git/objects/f9/ecd6adb45148c6e00ce1ccd7524b21c49fae6e": "7a8090273eab65fa115ff66c196666a4",
".git/objects/f0/559f0ead214bf0393aaf182b452ad95c8e3647": "731ecdd36fa3d739c06a269d0d536e97",
".git/objects/f0/1a946f1038d3d1b6d985af7ee79015845f6186": "ef6f897bb624b4f6b79f2af484b1bdc2",
".git/objects/f7/1d182d1b513aeae43d093e8200a05e8d02c434": "d9515fece86578f428342564eca8b660",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "d6e1364da0c48871bc1f4aa1ec5acdcd",
".git/objects/fa/edc286652f0784e5d7e7a77f60f3693f12e154": "2b6b71f23ff10a5d398f03012216eb32",
".git/objects/fa/aa0d2f61a5a37f934326f1424f6fe83e6a971f": "5c26629fbf3be046986dd1e005429b3c",
".git/objects/fa/e769f202108050cf567d818d190f1d5c3ff560": "53af23799032414b9a70fe8016b3d6e0",
".git/objects/fa/75d6d9f0b5478f154c6b54df82842fe8e50b3f": "39e3d914b8bd5198c8625e99b4093f23",
".git/objects/ff/f629b2ea99bfba5634e143ac1c56ac0c222c76": "597c0249be99f8d75c86a7888854519f",
".git/objects/ff/15cc7388583e85510fd17704c7075db95e8b7b": "33ba0aebdb0e4172b0a6d08337180eda",
".git/objects/ff/0d510c8ffc9a9dc9e90e63dc633b7392f787dd": "497c2948f786d7439e36e80679a17198",
".git/objects/ff/a07dfa0c28a4440003015d57bc4a7af9b52e83": "dcb966a6926c7965884f8920f1b2d855",
".git/objects/ff/abd97cb3a8698a6ea1a72c09215f8af4f6b156": "8d5ec7f332540a7da149601b7f4f949c",
".git/objects/ff/bef63c00a42190f3ba1db04e06963dd4a92f75": "6507971a9f111f105fa85af30174af2d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/f1/4d674879219bdcbc3c08baf7dc322ab79c7f27": "57a4a6ab0e1489a40f3c9b5e75ae8548",
".git/objects/e7/7ca652268de754d539ef2a775d04bf6094833a": "c807b1a858d13801e88e0d8b473fcc84",
".git/objects/cb/39bb4defdf117105c4faf9b296947e440216a9": "19cf2f5b0d39b1c5c42a262c1d969e57",
".git/objects/f8/9a678e5385ba2f80e360c84f0561f7f0e13723": "c43c6a6c5e3a0bb99bbae2088c699316",
".git/objects/f8/fa248d94a23f17088f8f7f1df0dfc0f2d76fc1": "491e120baab67ce8aa6e89eccecf0bb4",
".git/objects/f8/5f56aa544077f6e02bd2706ab3685caf660c5a": "a99c714f82bed14f7c0a64a0933f4915",
".git/objects/ce/ab5ab0b5dce0e7067ec50906151f232ab45421": "224b8abb875b565eaa599bad228ba720",
".git/objects/ce/5ea93fae1d4a3b76d88dbd995215b8bca6b2db": "dd633899ad5c9c3d5fc519d53dd4b8c2",
".git/objects/e0/88c265cf01ec1630b05983946339b970b308ee": "87f39cb8bbb888ba22262de1cd3f5fdb",
".git/objects/e0/27221feb481d444c7df5d7e95291cf88b3afce": "8598ba8a698bf976b543eede1d8eac7c",
".git/objects/e0/ba37fe0839074833c9806a012b0e8324e31aa1": "1b1509a13d0d47b2069fa489216ac218",
".git/objects/46/da00adb107fdf9e477b0e2c7ee9e8b35466f30": "657f265e8ac443b74302573ab19b2692",
".git/objects/2c/a865468adac29a2c959154aa2fc75f168ac35a": "4f41186a8c755a5e575917f8d52c1611",
".git/objects/79/bc1b4fefc2d46d59ad1263729464d68ef43bd1": "932fc0edab9e90b9ba19422f4f09a8f8",
".git/objects/79/c73e8c60d708c7d753dedff87bed063270b180": "c8a90b9acdf53d0bae07887e86baa0e9",
".git/objects/2d/861855bd6b7ddd916f4f68161f0e5eb36817b9": "737ec37c7a5e28cdd180cec140c9c3df",
".git/objects/83/05bf6fd90242d3e3aa9c1dd3797c21a0810478": "d516536f8f2465ffafa0b218edfbc11d",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "24a55a55a467d7195b6eb59c4f31d32d",
".git/objects/77/3ea0250d00338571f0898b4700e9ace82e5475": "fa54d55c1a6d2ff93d4619ed12ca7c9e",
".git/objects/77/5bab03d9f8190e34ed08c38261499c60c2162b": "1f9bb894c6b1ce63ecd63bae18d67baa",
".git/objects/48/2d87597439102a787f95cc79ee656b8fd9dafd": "97c42c41799bb4eface262a6b4279e58",
".git/objects/70/3575cfd222a60c320a6dc0947b470d2b7f6abc": "01c6c0d86a3aef1ed6e232e5f89d45dc",
".git/objects/70/14c381828af2a0ab19dd2ac11cb217b0e29f94": "365511dc52b02c223fdd2041625c15cc",
".git/objects/1e/879fcc3c92e07b0c8c8f01f9315b00f3c0ed26": "e42146f29bfc955bbbb0ec48c75b82c3",
".git/objects/84/ad64861be169eab5280cc3fc3fc54ee6b0ccaa": "d5d474f23f1aa2527acd990aaf36224f",
".git/objects/4a/b44b16a00dfd8477efe6cc5527f69571b63f05": "0ef1fbc97b04adf57854c08324dc012b",
".git/objects/4a/7ea007a54c13365d4f3d03bd0b1432044d2649": "848752c234d030b6938e9acc4115a02b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/24/b9ce948299e2d0491221fb2e6db2d805ae9b1a": "972730a7fa08a3815d913faf1d56574d",
".git/objects/23/eb3f008681a9e022b13cb0101211efd401b283": "6335309d16e4dc1d8ae81b651f0c8aa0",
".git/objects/23/d83213863131e7fa2abe90105e9a8505eb7373": "350e4a30df7d963b56952be177a12259",
".git/objects/4f/21db307e66463d05b7ff2acee9141b128d96da": "85c7da66431faebe4f0c58e44b8afe96",
".git/objects/8d/c32cfe5b5fb47ef0ac45d20a249d1f3d4e914c": "a2c86672b379062274e98780b7f27de7",
".git/objects/15/803356a1429e02ff4442be86fdae61b27e457b": "05c6e51d60e026fc98415b586080a228",
".git/objects/15/eb85f416de0e1273d7caf66403752254ae2a5e": "65b319397b9a02ba1025617faae0c7db",
".git/objects/15/fcbbae1b1ae84e0ddf80ca1b0087264a326a5a": "4a4eccff845ceebf3b136c69521f3fab",
".git/objects/12/9d344124dcb1f3bb94afb7ddef96a42c71799f": "5346ea87fa9c706f2f57ed8159c0502f",
".git/objects/8c/d365d8aa7617cf6644073055bb2ea02105ccd5": "ed9a9422d5e0aa1a8d1f86e3a6e57024",
".git/objects/8c/eb178626743dcbe6f53937729581156688d0a2": "587ce2a65910d7292fafce34ab633c79",
".git/objects/85/6c9c211ac66637e8dbf8bad3ccf3449027052c": "5d464c4f5fabfd14b8386597cf7d71a4",
".git/objects/85/ce5dc935102f7fda94bd17861a8ad1aed6a7c3": "6cb2484a64055324facdabeafa60a35a",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/71/0a2c0e417385260b344a832f8cf84aef6f31d7": "165cc55e1aab3be3175d615fc44b6c57",
".git/objects/71/075d67b508871bf62b55e0734b4a37e53b1129": "e55ff1dc1f30f6ea24d989af2fe5d5b7",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "b1d0c708122e6715c7b8283c8a00db11",
".git/objects/1c/8d6472771416358c8ed723aa51c4d7f8d3f48b": "ebb65e1659bbd9dcc5dcbe7d3981c8c2",
".git/objects/1c/b49da27cff87a4b8d70805139176e0a76307cf": "e2bd72a5871c14288442be28d70ec74b",
".git/objects/82/034f525a4c6f35a5cef89fa41a8930b7a98132": "33268a0ffffbe29fb2a5a4942e534576",
".git/objects/82/ae65fb27a10be1df2a3538dbdea8131093f379": "3dcdc9bc0f4571af865713b1a187ff5e",
".git/objects/49/cc3ef58db2b285067e0076a9fc5e4da6bfdf43": "2e8e1c35aa76da6b56372e1ad5829724",
".git/objects/40/964715c35df50199a8eedf7714a5eefeb3720c": "a9a80aeaacbd4ba8ca07f6c4a10f6d8f",
".git/objects/40/f4a6c50fa3ca8ccf7b713ac906e5b89c85d43b": "3cb10087bddc74d6929ddb92798ac27b",
".git/objects/2e/5ec7f1c5f195226ca31d1d453d2d35a85732d8": "567b449ce2604fe8b035eb1b49f3a2a4",
".git/objects/2e/a09d7a7d240ff13ccfbb42b006c529b3bedbac": "13c574fe631c499e0f11ef9740f09d93",
".git/objects/2e/9193b92c148805bc934f666d986933e6d6593f": "0a105370ba0198e90e8b56750438923c",
".git/objects/47/67ef136f2c1c3a4252583ca42fd406c1cfcd00": "935fefdff822175574ccf1233c57d590",
".git/objects/47/e179c5d1e1a12c7ba78b7de2f7fcbb0e652125": "f8a687441504a6180f62141997e6ea92",
".git/objects/78/51f3a7a7a2bd3a7bc71e85def0a72cb64db46c": "b7a5c1e3fac4133cd731e6b74e4c678b",
".git/objects/7f/41f180facba0ffb7890211788accc7515794a3": "1041bdc5437a2e7d185e477f421d956e",
".git/objects/7a/be3b1f757e9f5a77ad71e29c4d84df68285d27": "791ae9931d31cce2015df11912be3a25",
".git/objects/14/e99586bb26a72ac158218e06a66bd5f58c1923": "b3c98d5a7afc543eee5c2cb891b52a7d",
".git/objects/14/d73cad982f9799f8a48123ee74115ccaeb1883": "bba690a4b3ac5b401d06632673363c68",
".git/objects/14/be5f82affcf27a37f13fd48bc61f79251ef216": "0880e867ed577f6ba73852399f0c2ca2",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "f8f5e768f4ef89c05f64728257742ef2",
".git/objects/25/7da85c7d92d64078f6110c552e277aeed8aa51": "092feba083e5f6a2e114489fa14dad06",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b6a8a8eff29f8f14facb69801a99c3d",
".git/logs/refs/heads/main": "8b6a8a8eff29f8f14facb69801a99c3d",
".git/logs/refs/remotes/origin/main": "321aef6ba53e2f304a3d20d1dc4a583b",
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
".git/refs/heads/main": "f405ee0a1161771b679cb8bec3f24216",
".git/refs/remotes/origin/main": "f405ee0a1161771b679cb8bec3f24216",
".git/index": "e0e769cef9925af4e4a09d28c27f5545",
".git/COMMIT_EDITMSG": "f78bf9452aafb9f71f0577e4d9e55035",
"assets/AssetManifest.json": "6fe114739cf79569f21bfb92325ce1ec",
"assets/NOTICES": "6f83fc879aef48063429b40834f1eeee",
"assets/FontManifest.json": "bb010e71887df5ebe15353a88a44e757",
"assets/AssetManifest.bin.json": "3c9f0bfa4034c676abbea40a3b66203e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ab0acd1faa7d396ed16cd3740ff558d6",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/estaciones_PRIMAVERA.webp": "29c5bf6eb998d647645d0f49ec0f7dc6",
"assets/assets/images/icono_fumigar_2.webp": "3c1ca6f90da8110288b016e2adfb2754",
"assets/assets/images/icono_maiz.webp": "9db62d2e27208b029bc72cecf3ea99ba",
"assets/assets/images/cultivo_muerto.webp": "0308b2e732483ce684c42d1079cfa189",
"assets/assets/images/1080_pantalla%2520muerte.webp": "703a67f5f816040b3e48a7e58eaae4e7",
"assets/assets/images/personaje_grande.webp": "430834abc3d937aa7d2098e3f150a245",
"assets/assets/images/maiz_3.webp": "75879188621f66de587121d9a8b9fa6a",
"assets/assets/images/rucula_1.webp": "fa824007c3faca5fc0ed5d0998a9ba61",
"assets/assets/images/icono_rucula.webp": "a546bbff34d11f277cab86f09b9ee26b",
"assets/assets/images/rucula_0.webp": "40c07faa98905d565cddb8926ef14c3d",
"assets/assets/images/maiz_2.webp": "6118b2debc0781c53d44108bbad55ad2",
"assets/assets/images/maiz.png": "ed4754e3026013a16911c96c97f07fdb",
"assets/assets/images/3_tierra_muerta.webp": "8b5e64a69965cb1b207521f13fcb7f0a",
"assets/assets/images/avioneta_v2_4.webp": "ebab6649d5285a0b992bbd5d4e3249b2",
"assets/assets/images/1080_calavera.webp": "3783de41e1ecca117a40158341a90827",
"assets/assets/images/estaciones_VERANO.webp": "be87c261dbf1f36aeb192d0b5185e1bd",
"assets/assets/images/pie_de_dialogo_1.webp": "edc603ba9af220d2badcfab5611bf68d",
"assets/assets/images/tomate_3.webp": "3b8bd8e5cf5bc353f059ab96914464fc",
"assets/assets/images/estaciones_OTO%25C3%2591O.webp": "340894fadf98e04fc6c6eb39f2e8b048",
"assets/assets/images/avioneta_v2_3.webp": "67f38561ebe9e6bd8cb8e621400601a6",
"assets/assets/images/0_tierra_pelada.webp": "5fd85e7c7f97a85a1f1072f911c95d1c",
"assets/assets/images/fondo_plano_1080p.webp": "af1c26395eb670c12e41351f9e180b7c",
"assets/assets/images/zanahoria_3.webp": "5d3408e57ada0643545da6abe66584f0",
"assets/assets/images/parcela_infectada_1.webp": "219f0676d7b5333141b978b5c6660820",
"assets/assets/images/zanahoria_4_sola.webp": "30494ac22e8997e21fd3d323c24d2a1f",
"assets/assets/images/zanahoria_2.webp": "34a7cc4d3314f77fd587c28e4a8548be",
"assets/assets/images/elige_un_plato.png": "7822f987bc936ea47693a3e846fb94f7",
"assets/assets/images/720_pasto.webp": "c843fb5ffa30f3439829ed3c4721f033",
"assets/assets/images/720_calavera.webp": "a76d14aa91bd8c80a71c7a3402352b9a",
"assets/assets/images/nubes_panor%25C3%25A1mica.webp": "2c0f7a3f711c05a18286f0f3fdd8e7ba",
"assets/assets/images/icono_zanahoria.webp": "1b0b95f5b93e3b5fd3d28c137cdbcc80",
"assets/assets/images/avioneta_v2_2.webp": "c85aa9a7b62953b5347312657a09f682",
"assets/assets/images/tomate_2.webp": "b33922793143c87c79ae1a68a7c2dbb5",
"assets/assets/images/720_pantalla%2520muerte.webp": "fb69921709e2c4a50a17bf0ab6fa0162",
"assets/assets/images/avioneta_v2_1.webp": "b58e34ef36d1f45a02e574a236e2a67e",
"assets/assets/images/carrot_pie.webp": "c510ccf6e8195e7fddcd07e1a20b508b",
"assets/assets/images/icono_tomate.webp": "9a428057eea6f32f0ab742393cc8ea6d",
"assets/assets/images/tomate_1.webp": "2852ff5daaa327d04eba6b149514d675",
"assets/assets/images/icono_recetas_1.webp": "baaf5c91bc61fcc5c5f5998a7ab26851",
"assets/assets/images/parcela_infectada_2.webp": "bbb05c9af8748da74c2bebafaaa92af7",
"assets/assets/images/zanahoria_1.webp": "9e65c5c4912bcd41b53f13275752d689",
"assets/assets/images/pie_de_dialogo_4.webp": "82019141f63fb86158ba3833def45c8d",
"assets/assets/images/pie_de_dialogo_5.webp": "fd93912400b10176dd9573e8ece307e6",
"assets/assets/images/maiz_tomate_zanahoria_cultivo.png": "a76d3cd304de2e37ecc1ef4247fb69e9",
"assets/assets/images/brote_1_solo.webp": "eac3f1991816ccc209da81ad562802cb",
"assets/assets/images/1080_fondo.webp": "983efbc0207114f546c7ee4e0920fece",
"assets/assets/images/zanahoria_0.webp": "9c0bb0e96a5b30a6152b773fc8f1106c",
"assets/assets/images/personaje_512.webp": "d1fbfc38beffd440d0f1f9f43839983d",
"assets/assets/images/parcela_infectada_3.webp": "71a8408950a9535fc08f26c74bcac6b7",
"assets/assets/images/tomate_0.webp": "663ef351d7370ac29b186a72b20bb8f6",
"assets/assets/images/tomate_4_solo.webp": "7793593680fb9dc11a6b85f690f2b567",
"assets/assets/images/beef_with_tomato.webp": "78920bdad3bc49dfa07831ab85762c37",
"assets/assets/images/cotiledones_1.webp": "a601c93e75f764d06e38e61bfb6d569f",
"assets/assets/images/parcela_infectada_4.webp": "bb660b6a119c27f828b2b94b5f36a344",
"assets/assets/images/1080_pasto.webp": "d70797616f90f1ab041b1c37327a738f",
"assets/assets/images/pie_de_dialogo_2.webp": "75c5da640fc285ae513b8872afac8440",
"assets/assets/images/rucula_3.webp": "1c887b81b835b094f0d72a77c3377412",
"assets/assets/images/maiz_4_solo.webp": "ec860d2f66098556b9a395aea60bd5f4",
"assets/assets/images/maiz_1.webp": "cb99601eba7719ec218354193f090218",
"assets/assets/images/tiempo.png": "ae811d5a6e771163f324bb406d97f2e5",
"assets/assets/images/estaciones_INVIERNO.webp": "5222166a70db7be5b8a6b16f92fd976a",
"assets/assets/images/1080_game%2520over.webp": "2351acf0282a6fe9241f81ce398bab52",
"assets/assets/images/720_game%2520over.webp": "e151f6a462df35c5ff0fec531531da4c",
"assets/assets/images/maiz_0.webp": "4893784927f71684da9ef7b7a89ba976",
"assets/assets/images/rucula_2.webp": "ce98d8e87aaeb031dbb734060c67cb01",
"assets/assets/images/pie_de_dialogo_3.webp": "b8ff70c4a7a3619950cd1c36642c2a26",
"assets/assets/audio/tango.mp3": "4604b6a65007048625c65e99d1e245f8",
"assets/assets/audio/touch.wav": "878d556ff80c562c42daf2a395b6ee19",
"assets/assets/audio/heartbeat.mp3": "52db9c69fefe77865d63176f0e097d2c",
"assets/assets/audio/music.mp3": "a041a9c530378af2569c901e917a5b0c",
"assets/assets/audio/sad-noise.wav": "7547c97558eae650ba3f402f2131366f",
"assets/assets/audio/plane.mp3": "917b46ff12793d5f459ba4e2eaca6ff5",
"assets/assets/audio/seed-planting.mp3": "b91173839bfdb8a2ac64199e02bea3a8",
"assets/assets/fonts/Crayonara-Regular.ttf": "fb872c9fdc3d682b63282e3ad99a2e73",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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

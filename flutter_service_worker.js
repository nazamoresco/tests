'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "db9b455094bb834fa4b58fd29e7fc261",
"index.html": "80a9d9c1a9ccfd3f6a199c5ec207b727",
"/": "80a9d9c1a9ccfd3f6a199c5ec207b727",
"main.dart.js": "60825e4f43ac206030c2be677bce9f72",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f33f9cb8ba20cfa1a5bf26feccdcc16",
".git/config": "0fe7810d0fd28e8dd2387660ff1f61b6",
".git/objects/92/70d113a4d3a91d033860d53f4b148736379877": "1cd6e190987db878791705ec43fdf84d",
".git/objects/3e/07059f06ea76d3c656b399272e12bb01300acf": "1490e037df631e2a49f1d8905cc4f9cc",
".git/objects/68/e6b8c42404bcf95c16c8cf919e9042149d7c05": "893cf533e22175325c634d989f447384",
".git/objects/68/e2b6140b7b9749485d5c67b496f8cb85df5371": "4b913a1af450abc05abb0098440a1d84",
".git/objects/3b/27c37afa2d18f6b694c333d7b86270db04a512": "a0ca963cb7689f6e1ad4f9d06e3cf4b6",
".git/objects/03/fecc8a45242d6ff8972674f49c530531eaf05c": "02254a39be710136f2cfb0a7ad1b673d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "e6242a698630e01936528f853be4b265",
".git/objects/9b/5e18539e680300c2f38e756d5cb92e844bd115": "de379afe0139c1727f20c55b45831e39",
".git/objects/9b/c89636fb5ce3c8c96900040dca546dc319faa3": "22d3efcbeac888e2a2a4f7ee4ec2b5c2",
".git/objects/6a/3161dbc8a8c7f72aa12b560fca2d8bad2ec419": "09bbad350836a29377dd452c9ddc73bf",
".git/objects/32/5ea79619d0cf7752ede721b1bccef8e653f2b1": "40ee6becc18935f2a47a24117df061d2",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "e1aa6d5809aac67e57bcf796b091cab2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "5cb210ebf2040198d349ddc9901286df",
".git/objects/3d/cb6ba1f25f006e14df8e39059ea58123275eca": "ea4d4922b9257fadd0c2166f9ca9ff9d",
".git/objects/58/5e0b176e1eed36479624a41602fed77220df4a": "f71475b3f68627125ccf346f3eb24b3d",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "00f42c84080ce5c913903ae2fdc7b1d9",
".git/objects/60/8aa1dfc0a1e6ae72f341e77a730a08dfb6d7a2": "ae01eeb968d58138a8ff95b4cbb572fa",
".git/objects/60/d9c7cfeeac34ddef029e1a7dc3eb93a4c530e2": "2214f28feccc5e0c463e29d668df97b3",
".git/objects/34/853e23730b6999cbaef41c7c0f3a89e6bc97d5": "a6e59e22413938741b11c0cc81a9e382",
".git/objects/5f/0d4fd541d5b760105763351c1131e77e411889": "4492a0d7124e893eaa83d81c2c372f5c",
".git/objects/02/d64206fa4700e23520ff7e436ab457a7f00f59": "8464228e7b7212ba606bd00d9b331ba6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "3ed16dd546f78d19b2268173170708b3",
".git/objects/b2/198f0d5701adf0c1a001162cea7751325eb687": "b24e464ab0f7da587bcfcb9e30a64217",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/d7/a4d0646f8ee55aa162787acaa1243b3d8498c3": "194cace68664716eb955c2c93d1b27e8",
".git/objects/be/69c1e10314339c36a22d83a7d77f97ff624e9a": "0615fe7202b5115177ed26b8d94ff1ee",
".git/objects/b4/0ee5b110a10e50cc6237d61477212cafdbe884": "c3e62a0457cfe4ecc65cf35d8215930f",
".git/objects/a2/4811258a2ce7ec502fd6a9c1fa99daef46abf3": "5db252c65c5473f3b0f226e6dee612c4",
".git/objects/bd/f01c15fd0e4bd8ec2fdc204f510e56f6bf5ffb": "3edbd72e77046bfc1e04ac3b1a49b5c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "2aaea956914fa5bf077f30fb120cbd47",
".git/objects/d8/fa5eb03e3a58499db6fea0e5a3cbfa78195fca": "00839ec16a7bed716673ca5aa3de33a5",
".git/objects/e5/d3cc4c079575db8a0940dcd9531d8a4b3f4665": "a8c89cfdd10a304d8b9e9ace2143f638",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/fa538773a6432923b540f4a5368606124b077d": "3af225cf6bf44542fbac3d270891b060",
".git/objects/ee/8ce4c3c5c7ff0f8eb2fe1d17f09bc3f3cea8d8": "942470a5006ab07aec4d62dae255d4e0",
".git/objects/fd/e193bda05ccb51cc2bb60a7043fc709ccb3ba6": "a0aa6d66179184dffadc08eaea4f96e5",
".git/objects/f5/7b373304bb70ff9fdc09b7bc10cd4ce2ac3f13": "ee1f93ca8a1352881428cb61af3cf85b",
".git/objects/ca/550330c94a8f64df554366b8651f25561fbb26": "704a536855407d1d266dd1824cd593e6",
".git/objects/e4/d281917b2ab82acc0595ab202540585029e33d": "d62be177777408b599063e878eebb747",
".git/objects/e4/d26dfd5ad9cacbcf939358262414079498c240": "7440e408a6cea465836b6293d808c069",
".git/objects/fe/3d11ec632c6acbd8199ffa0ca8813a920c780a": "136a6d13c34a9d66d497eb0363d7f14f",
".git/objects/fe/d45c9ac4dbe870564a0d602cac646c69257b64": "2128299254997245350e82122edcf0ed",
".git/objects/fb/3503a3fa381e3605b10c6677146befb8450c1b": "7cba6987f8eecd50dd8dde8cc6da575a",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "b601956439da2e5048fcc13a260263b9",
".git/objects/18/8de7f98a773f24fbf7ff0607d4089b8c518684": "a77469740f2ebd636e60a437e18f1d6f",
".git/objects/4b/6ad28a8aa2c8799f60ec91102f3a0f77bfbcb3": "fc052b4937b56e769da3b2d01e506fec",
".git/objects/45/0c9b4105bd309748ce214aa0c97a63067c7906": "4ba2c73a249115233beaebb2b65db865",
".git/objects/73/08f8a3cde8ef23ac2b1b3e9200d5d4a123f149": "e0fa2d213a6dab116d0e2f04b226a820",
".git/objects/80/65c97fdba6bc00f712a4c98036e34f855a8e9b": "6670f2d4461dfb95285ce327a9b537b9",
".git/objects/7b/3f59edd3833ba77e03e7f9cd2c4f7b5c1e2317": "d365a1d7261f9c040c5d37397fede72c",
".git/objects/8f/3da541c6fd1f721c547911155b75f156bebcba": "f6cc802847b3a9c0ee288c7856a87986",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/3122f13e8cfff98e640fd412afb3b624b66018": "7db348046cfc79ccdfa01b14c967dd14",
".git/objects/10/4a154315ea7f9373e040e07074cb71a060272f": "b1d55cffbf4630b239346ea197cf9e6d",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "3be5d9da0bc72ac068eb1117c294c7fc",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "fa87396825d8b82f7aca540fc84d0b2f",
".git/objects/21/f610ad2ca3a03c7188396019594542b240cab4": "e7bb93c17ff41b193e2a0e48ce7f1d7d",
".git/objects/4d/34e45c8e8298d4db723d2eed024ecdd1d163b7": "095a7703d6042a07316891f1e029887d",
".git/objects/75/8973fb83e09eda40b940e9a31b90ec83590aa2": "8c174866658e04223062fb41796bb255",
".git/objects/72/6224819848425e3bddd705ad31d6d792645476": "ca7830cc1fc8f7e9b5434cceb0dae5a8",
".git/objects/44/31ef4766a209dd5a8da1ea0a8c323991e60ed1": "18bcfca146ff55a37782890798dbfc4b",
".git/objects/2f/3e1fa3e03dc49e63bb017104916c8f60c1b423": "c0ec431b679dba92ee0aadc3d73eea74",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/38/565c1cf0849a0ee247282a95bf0a815c99eea8": "1bca20a7d53601c07d1dad78384d0e8b",
".git/objects/38/451b1e64f8d531308353aee5c75525c0920943": "9a66a02d6c6bbce6282cc8318cf52ee5",
".git/objects/00/a1e804a07c047d0da70b779f39eab5f14c5391": "cae2838934d1a343a9b568cf0d2bf4d6",
".git/objects/00/c83900ed44b200fc7f3a5f554db4ac52651bdd": "e06f7db8bc00290a1f3835e16679c423",
".git/objects/00/bef06f1fdbf445e6349b4b9b6fda78035b6f36": "4f777ec7441f253096976e659710db4e",
".git/objects/9a/d7861600824b07e2444f25d62b6bb7197696ca": "1784d07ec673d7cb5bb47002267e8dd7",
".git/objects/5d/c978072e4ace48d0c8c4e9247df730572e671f": "26298e55a33e3cf04d2b9bc775cebe24",
".git/objects/91/0193c43ed557baf9dac91d62b8723dcd7d86a2": "7c2022f75caea725fe27d3c301cfe900",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "40d9aab5decf7709f8f07b6007c148f7",
".git/objects/96/be5093fe353a2bc4d5ce6138319f144b138863": "926c3cb61f2910977726ee9cdef58c02",
".git/objects/53/e6007a89ed85b699f65053927c3e8f2ef6ef9c": "f681ac20ab648cf7ed3921a8c8faee5e",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "8d2fd1b562fe6248092f0f7be87c777a",
".git/objects/37/51ddc8f07ce798e7c73d72b14ded4cd53cd995": "c70aabc28c89975b6b6ded1f230b2b37",
".git/objects/6c/93b266a55e4d62f956dd2166305a55af502ff3": "8c4cbaf7a34a6e0d316991942e92e58b",
".git/objects/63/07533a417600306543a73a4b05edfd3a057109": "80552f7c6cfcce2ef1ca6c70e7547cb7",
".git/objects/0f/9ffc55c25a117e68d49cddb74ffa46bd1091de": "687262b5909cacf4d49f2729bab0f1eb",
".git/objects/0a/46ae2d109668aae8adfe3687507f05e0506bbd": "8fc2e91df3e1181007435cbf5478707d",
".git/objects/d3/6d5ca3f1705550627ccbca62091d511483628a": "fef26a89d4a653e3ba859522757c7117",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/b1/f3feff3b0bc4dd0139e33ef90bd8e7f87a85cf": "ddd8455a8de519a592de8dc9be82f280",
".git/objects/b1/69853b820d77b264d96433893320d4346703eb": "e96b3ce10ee9cd4d65dc682540af553b",
".git/objects/b6/6c7052baa84a63d3e43a5c36ba45023cfd0ccf": "43be4a8c98722b7262b1c9ee6edfe5eb",
".git/objects/d2/fb4bb0860972fb2c81c94d367cd961effb0525": "5c29d66cfd989351f857a66199a28c33",
".git/objects/aa/91b109bf038aea8ee03c9d4f49dfbaf978767e": "3e54ae86e1e9be15013590b00f2282ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/f82978fbd5228068de3df149ef53cfbbeaecf7": "c7d86105bbfcf5a4b62a94a733b0c984",
".git/objects/a8/4c14960e4503c1d5ef6cd54557f47438c966e4": "4e33be96cc226c28c02d7cc308150ac2",
".git/objects/de/e2cd3812bacc38ee0959fadd7c26aa835cd4f0": "cd632592f4df673fd8eedaef73b4f8ed",
".git/objects/de/eac4d699f9614c669683579788d83c448df616": "b5327587d80c3e1cc1689cd5ea7ef12a",
".git/objects/de/f069eaa1ee09dfc2e5896dc1cda7dd1d94bdcc": "1e71c9de6d39c25d49248a3212bb04ff",
".git/objects/b0/3ca54792c8b4c759f326b9d92199160e67fa14": "a5c28654a217ee3ce7d908623c8c2b79",
".git/objects/b0/07999312e9797b423ab51b9db7b3c409b627bc": "761e025c816b2a06606f29a01f17e7b0",
".git/objects/a6/a05db44d5ae08d3721e437d090dce9980437d0": "506859b68f373ba0a144a71acd357ff8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ef/ee8f6f0d377da01ab967ddc4320dc86031bbf8": "5e16be3c33d7dabccfe7e11cc3e57039",
".git/objects/f7/1d182d1b513aeae43d093e8200a05e8d02c434": "d9515fece86578f428342564eca8b660",
".git/objects/fa/b81e2a70a2162a482364a959815373dcf57bdd": "59955b356a95735cbbbfffaba2d19cc2",
".git/objects/f6/cfbd93a6d74c234faa4e02e92cef4527720817": "64f8171fe66f743f5fdfd75bc2874034",
".git/objects/f6/7236373f726dd35d4401188ae3794e6cd06c54": "eff0c8eff0c5c92f91a0758b95485843",
".git/objects/f6/3addacc551d5f66ad8aa258e869ee24fe07ca0": "a5faa7883228f0a78eb897ed18977a34",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "63b148d9ddd47a6026ac08808bf4e2bf",
".git/objects/f8/38180b448f5d5e70eeec0313c36ba875fc3356": "5da77f7c2b805807a83eb74297a00a22",
".git/objects/ce/5a3d74e3aafbf7c5b0f66e3d707ea1558eadc9": "b7c24f69712ec4dfd8172376ac09a68d",
".git/objects/ce/b2a12a64183a1b7e126725f524f04f4ceb1d3f": "1bd1c2234e79580caacd47615d6f7352",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/46/ff1bd50067731467df4c95528958048d81e1a9": "7b198e6450c577d3c2466aa0263d0e12",
".git/objects/83/bae401707f40035a453bb1c15f52d2ab313046": "1a9b0b49782f5d1aacc6ec7a585e2a52",
".git/objects/83/64397c186c20ebb93ce6ab7a54147e16d1288a": "47c11ed7de8650f8a0b62962997dbb4a",
".git/objects/1b/a66615ed4682c0521d7d43e0a7e8f6d0e7bf39": "6cf9a187afd0bd4eb70d7f2fc41304b1",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "54cde8761ce732c59ea0d2c4e64bc734",
".git/objects/77/e7fce2b47a559e27e9f628174b7338c5ab7b67": "75fc983fef79f968befbde70d4a1b53f",
".git/objects/48/adf2b5e2add1cb8aba9733ef45702463cea186": "980b3c3c06b91fd30e338cbfd5c62edc",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "510800b6a1581fb2bceea8455f77d3a0",
".git/objects/23/c88a2f32555ce90774ca3b4a8628a0ebd44048": "363f4390ee24d3c30f04c36f666c1719",
".git/objects/4f/93bf0970f863bdc191a5641b1631b5352fc2e3": "29ff12ff0b7256724b1117e2530b114d",
".git/objects/4f/21db307e66463d05b7ff2acee9141b128d96da": "85c7da66431faebe4f0c58e44b8afe96",
".git/objects/12/11e929871b7d64163b5ad3890513633b51eea4": "d63a5e0821ee76ddbdc100ada0e8e601",
".git/objects/85/f0f0ccdce36285e8a283098215cf24d9102d10": "d2096d675f042e3ca7efed265289b394",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "8fda235814acf392f50dd9a4feb7db11",
".git/objects/71/0a2c0e417385260b344a832f8cf84aef6f31d7": "165cc55e1aab3be3175d615fc44b6c57",
".git/objects/82/27133b9465ece0b7ff3c8a1b1db45ad0fa0ab3": "28cf8dad91b22b1afccf7c67d6c43cca",
".git/objects/40/f4a6c50fa3ca8ccf7b713ac906e5b89c85d43b": "3cb10087bddc74d6929ddb92798ac27b",
".git/objects/47/20d146610a395ea555f8c2a26b716f1e2e9dbc": "1d99352b86ead046f54aaa4cffb1c1c9",
".git/objects/78/37fdb2b9396e4d0b9c109bd883dcb2322b8117": "3779f8f558cb6ace65e404fab7dacd6d",
".git/objects/8b/b7e2746f8074b529d93b92b6372c76e9b80863": "de35001ffecb293a8a743c79db4ee80b",
".git/objects/13/89abbceedeb495b094f8ce5cbe81a149d651bf": "fb45d06feff51f3bc1a40d9763b81cdb",
".git/objects/14/f1a6833fb3a5e4b51e728a4cd54c5bd1d80b21": "dc3eb1ab9c42113d93296afa3b0db2bc",
".git/objects/14/e9a37b64a8f9044c55262e5b24f7fe1ba9cf18": "379cb92c2176f79d94743c49ca424d70",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7909d438d590f164deab50c335ceb405",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3bd13936673a3a6eafae4a6e66cd9fe",
".git/logs/refs/heads/main": "e3bd13936673a3a6eafae4a6e66cd9fe",
".git/logs/refs/remotes/origin/main": "c984e1adcf43686f82f77713e80eca9b",
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
".git/refs/heads/main": "de09f13cc5285eafd7dca749483bdc28",
".git/refs/remotes/origin/main": "de09f13cc5285eafd7dca749483bdc28",
".git/index": "bcfceb70e965fe61ca6ed02eeb2275df",
".git/COMMIT_EDITMSG": "129e3c44d1c0d09a343fc59ec786c7fb",
"assets/AssetManifest.json": "f2ff8579df1db3ed6ad372e40c2c4d45",
"assets/NOTICES": "b36fc75c7cf623b86dc9f17fcb51465e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "42cfc1744f27c5b001822ea40f0c0a1d",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/cultivos/brote_1_solo.png": "58a56e4cdbe6c8d153c13700493732f9",
"assets/assets/images/cultivos/cultivo_muerto.png": "eee29924e89c284acf79c3ea9ee43987",
"assets/assets/images/cultivos/zanahoria_1.png": "2eb177d6837137a510d2912ce6daf58b",
"assets/assets/images/cultivos/rucula_2.png": "6dc9697834f82b1f653df6933d318695",
"assets/assets/images/cultivos/rucula_3.png": "559193bee4c42e5bb9d7a998e14f6917",
"assets/assets/images/cultivos/zanahoria_0.png": "e95e612b7fe7d230997d9359a97a6fd5",
"assets/assets/images/cultivos/rucula_1.png": "93d5a398254b90905805040d9cb55038",
"assets/assets/images/cultivos/zanahoria_2.png": "f843915db44087ea05b795d6abd53f4a",
"assets/assets/images/cultivos/zanahoria_3.png": "fdc0b36ce62c461489ee23d327e6dfbf",
"assets/assets/images/cultivos/rucula_0.png": "a0c8f7e27a43136cb26464a120de4136",
"assets/assets/images/cultivos/maiz_4_solo.png": "2d33b14c68d7b17b2c7481d2dacf4aba",
"assets/assets/images/cultivos/tomate_4_solo.png": "0e91769e84923df371c0b970a0cf0042",
"assets/assets/images/cultivos/maiz_2.png": "c6a736124e3e2de3d1ab86cb60e8173d",
"assets/assets/images/cultivos/maiz_3.png": "a2b36975b346c7202f08612d1516e281",
"assets/assets/images/cultivos/maiz_1.png": "07ff18579b9ceaa6ebc3b8c8f3c73c7d",
"assets/assets/images/cultivos/maiz_0.png": "363775bf21158e67feff75b89ecfcdd3",
"assets/assets/images/cultivos/cotiledones_1.png": "0168365548436ed0f82f44236de66243",
"assets/assets/images/cultivos/zanahoria_4_sola.png": "6b55525d74d1668dddd098c3b3db112c",
"assets/assets/images/cultivos/tomate_3.png": "337f86a754c39c96937b670bf40acda2",
"assets/assets/images/cultivos/tomate_2.png": "b8af0d491a709204bf51418f4a6a4c30",
"assets/assets/images/cultivos/tomate_0.png": "c63357acbfac649e452099325025bf06",
"assets/assets/images/cultivos/tomate_1.png": "37174dbfb16d91267eedeab3062bfdef",
"assets/assets/images/fondo_completo_sin_nubes.png": "556b760b78b6cdb3803482a5e4e0b796",
"assets/assets/images/fondo_recorte_1080p.png": "0e7012e5d74b0a88cb895c573997ab9c",
"assets/assets/images/tierra_brote_1.png": "b52825d23fe92efe429b6ed2e7106a9e",
"assets/assets/images/personaje_grande.png": "43cb5f4af7efe09ac9e98b6ba5a3aff1",
"assets/assets/images/parcelas/0_tierra_pelada_1.png": "69a2074db58261483a2dd791baff2170",
"assets/assets/images/parcelas/3_tierra_muerta.png": "277585fe0ebe61bada48ce339fa33055",
"assets/assets/images/parcelas/2_tierra_brote.png": "b9b91b1c01fcaf8a46a49031c705131f",
"assets/assets/images/parcelas/1_tierra_sembrada.png": "824d14ee22490784c4cbb9d448d4bf3a",
"assets/assets/images/parcelas/0_tierra_pelada.png": "77f40ad31a620bfb4831ac61fc662366",
"assets/assets/images/tierra_muerta.png": "d85c554a5c98d011ea9833655e2f3601",
"assets/assets/images/fondo_completo_con_nubes.png": "bdf83b03c80d95cbc1534423a19d6c9b",
"assets/assets/images/tierra_pelada.png": "5706492a5d100a4900ca6a8a3d7b9164",
"assets/assets/images/casa_camioneta(boceto).png": "72f74ba0d5bf345c8314727cb52c6be8",
"assets/assets/images/iconos/icono_maiz.png": "b13fd585c357ace371e8f0d7388cfb84",
"assets/assets/images/iconos/icono_tomate.png": "60aeb57567f530da81cd0a85a83f7b0c",
"assets/assets/images/iconos/icono_zanahoria.png": "8c25c462221dab6c1a8a3e585785d2cb",
"assets/assets/images/iconos/icono_rucula.png": "b01b42b8eb0a569f6f29e03f83bc47ae",
"assets/assets/images/decoraciones/deco_1.png": "7c8db6deb3817cf5570007a14fae8be8",
"assets/assets/images/decoraciones/deco_2.png": "230f9e61d5b7bdc6c89b91f179ce2081",
"assets/assets/images/decoraciones/deco_3.png": "8ff86d92c7e19224c7a80743c7b19c23",
"assets/assets/images/decoraciones/deco_7.png": "8bf3a99d1897bd572f5f3b0bb11500eb",
"assets/assets/images/decoraciones/deco_6.png": "8c29c215168d1a41044a6aba915fb77b",
"assets/assets/images/decoraciones/deco_4.png": "376efe49271a9e1ea837c19a8c6e6e24",
"assets/assets/images/decoraciones/deco_5.png": "145962f73d4f9d22df4abed80804d752",
"assets/assets/images/decoraciones/deco_11.png": "86a5dab5172e79600b678e756a9d9537",
"assets/assets/images/decoraciones/deco_8.png": "6d46426b6709630a04b4bb0efa827184",
"assets/assets/images/decoraciones/deco_9.png": "671b156336f6da21598ecb67f57b2595",
"assets/assets/images/decoraciones/deco_10.png": "487d92aa9bf283c6a5dab43437301d81",
"assets/assets/images/decoraciones/deco_12.png": "6f8f8e2d5c01ae62fe933d3703acd4dd",
"assets/assets/images/decoraciones/deco_13.png": "d3df432b55dc96573fcd1ba7ac54d3ac",
"assets/assets/images/decoraciones/deco_0_GRANDE.png": "6af0700adfbc35f329002890fb826954",
"assets/assets/images/decoraciones/casa_camioneta(boceto).png": "72f74ba0d5bf345c8314727cb52c6be8",
"assets/assets/images/personaje_512.png": "bb849b26c837b42f32f60444cf61cb34",
"assets/assets/images/nubes_panor%25C3%25A1mica.png": "fac4e2dd213dfe4a843ba5bba1e70b9d",
"assets/assets/images/fondo_plano_1080p.png": "70c81b9469a7b9e36ddb4ebc63aebfcd",
"assets/assets/audio/heartbeat.mp3": "52db9c69fefe77865d63176f0e097d2c",
"assets/assets/audio/music.mp3": "a041a9c530378af2569c901e917a5b0c",
"assets/assets/audio/seed-planting.mp3": "b91173839bfdb8a2ac64199e02bea3a8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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

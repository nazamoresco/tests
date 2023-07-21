'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "db9b455094bb834fa4b58fd29e7fc261",
"index.html": "0a5134149707edbe672abfb8e8a5cfdd",
"/": "0a5134149707edbe672abfb8e8a5cfdd",
"main.dart.js": "9caebea82066912c7439fc5da4f1b100",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f33f9cb8ba20cfa1a5bf26feccdcc16",
".git/config": "0fe7810d0fd28e8dd2387660ff1f61b6",
".git/objects/3e/07059f06ea76d3c656b399272e12bb01300acf": "1490e037df631e2a49f1d8905cc4f9cc",
".git/objects/3b/27c37afa2d18f6b694c333d7b86270db04a512": "a0ca963cb7689f6e1ad4f9d06e3cf4b6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "e6242a698630e01936528f853be4b265",
".git/objects/9b/5e18539e680300c2f38e756d5cb92e844bd115": "de379afe0139c1727f20c55b45831e39",
".git/objects/9b/c89636fb5ce3c8c96900040dca546dc319faa3": "22d3efcbeac888e2a2a4f7ee4ec2b5c2",
".git/objects/6a/3161dbc8a8c7f72aa12b560fca2d8bad2ec419": "09bbad350836a29377dd452c9ddc73bf",
".git/objects/32/5ea79619d0cf7752ede721b1bccef8e653f2b1": "40ee6becc18935f2a47a24117df061d2",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "e1aa6d5809aac67e57bcf796b091cab2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "5cb210ebf2040198d349ddc9901286df",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "00f42c84080ce5c913903ae2fdc7b1d9",
".git/objects/60/8aa1dfc0a1e6ae72f341e77a730a08dfb6d7a2": "ae01eeb968d58138a8ff95b4cbb572fa",
".git/objects/34/853e23730b6999cbaef41c7c0f3a89e6bc97d5": "a6e59e22413938741b11c0cc81a9e382",
".git/objects/02/d64206fa4700e23520ff7e436ab457a7f00f59": "8464228e7b7212ba606bd00d9b331ba6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "3ed16dd546f78d19b2268173170708b3",
".git/objects/b2/198f0d5701adf0c1a001162cea7751325eb687": "b24e464ab0f7da587bcfcb9e30a64217",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/d7/a4d0646f8ee55aa162787acaa1243b3d8498c3": "194cace68664716eb955c2c93d1b27e8",
".git/objects/be/69c1e10314339c36a22d83a7d77f97ff624e9a": "0615fe7202b5115177ed26b8d94ff1ee",
".git/objects/bd/f01c15fd0e4bd8ec2fdc204f510e56f6bf5ffb": "3edbd72e77046bfc1e04ac3b1a49b5c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "2aaea956914fa5bf077f30fb120cbd47",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f5/7b373304bb70ff9fdc09b7bc10cd4ce2ac3f13": "ee1f93ca8a1352881428cb61af3cf85b",
".git/objects/e4/d281917b2ab82acc0595ab202540585029e33d": "d62be177777408b599063e878eebb747",
".git/objects/e4/d26dfd5ad9cacbcf939358262414079498c240": "7440e408a6cea465836b6293d808c069",
".git/objects/fe/3d11ec632c6acbd8199ffa0ca8813a920c780a": "136a6d13c34a9d66d497eb0363d7f14f",
".git/objects/fe/d45c9ac4dbe870564a0d602cac646c69257b64": "2128299254997245350e82122edcf0ed",
".git/objects/fb/3503a3fa381e3605b10c6677146befb8450c1b": "7cba6987f8eecd50dd8dde8cc6da575a",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "b601956439da2e5048fcc13a260263b9",
".git/objects/73/08f8a3cde8ef23ac2b1b3e9200d5d4a123f149": "e0fa2d213a6dab116d0e2f04b226a820",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/3122f13e8cfff98e640fd412afb3b624b66018": "7db348046cfc79ccdfa01b14c967dd14",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "3be5d9da0bc72ac068eb1117c294c7fc",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "fa87396825d8b82f7aca540fc84d0b2f",
".git/objects/21/f610ad2ca3a03c7188396019594542b240cab4": "e7bb93c17ff41b193e2a0e48ce7f1d7d",
".git/objects/72/6224819848425e3bddd705ad31d6d792645476": "ca7830cc1fc8f7e9b5434cceb0dae5a8",
".git/objects/44/31ef4766a209dd5a8da1ea0a8c323991e60ed1": "18bcfca146ff55a37782890798dbfc4b",
".git/objects/2f/3e1fa3e03dc49e63bb017104916c8f60c1b423": "c0ec431b679dba92ee0aadc3d73eea74",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/38/451b1e64f8d531308353aee5c75525c0920943": "9a66a02d6c6bbce6282cc8318cf52ee5",
".git/objects/00/c83900ed44b200fc7f3a5f554db4ac52651bdd": "e06f7db8bc00290a1f3835e16679c423",
".git/objects/9a/d7861600824b07e2444f25d62b6bb7197696ca": "1784d07ec673d7cb5bb47002267e8dd7",
".git/objects/5d/c978072e4ace48d0c8c4e9247df730572e671f": "26298e55a33e3cf04d2b9bc775cebe24",
".git/objects/91/0193c43ed557baf9dac91d62b8723dcd7d86a2": "7c2022f75caea725fe27d3c301cfe900",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "40d9aab5decf7709f8f07b6007c148f7",
".git/objects/96/be5093fe353a2bc4d5ce6138319f144b138863": "926c3cb61f2910977726ee9cdef58c02",
".git/objects/53/e6007a89ed85b699f65053927c3e8f2ef6ef9c": "f681ac20ab648cf7ed3921a8c8faee5e",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "8d2fd1b562fe6248092f0f7be87c777a",
".git/objects/37/51ddc8f07ce798e7c73d72b14ded4cd53cd995": "c70aabc28c89975b6b6ded1f230b2b37",
".git/objects/6c/93b266a55e4d62f956dd2166305a55af502ff3": "8c4cbaf7a34a6e0d316991942e92e58b",
".git/objects/0a/46ae2d109668aae8adfe3687507f05e0506bbd": "8fc2e91df3e1181007435cbf5478707d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/b1/f3feff3b0bc4dd0139e33ef90bd8e7f87a85cf": "ddd8455a8de519a592de8dc9be82f280",
".git/objects/b1/69853b820d77b264d96433893320d4346703eb": "e96b3ce10ee9cd4d65dc682540af553b",
".git/objects/d2/fb4bb0860972fb2c81c94d367cd961effb0525": "5c29d66cfd989351f857a66199a28c33",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/4c14960e4503c1d5ef6cd54557f47438c966e4": "4e33be96cc226c28c02d7cc308150ac2",
".git/objects/de/e2cd3812bacc38ee0959fadd7c26aa835cd4f0": "cd632592f4df673fd8eedaef73b4f8ed",
".git/objects/de/eac4d699f9614c669683579788d83c448df616": "b5327587d80c3e1cc1689cd5ea7ef12a",
".git/objects/de/f069eaa1ee09dfc2e5896dc1cda7dd1d94bdcc": "1e71c9de6d39c25d49248a3212bb04ff",
".git/objects/b0/3ca54792c8b4c759f326b9d92199160e67fa14": "a5c28654a217ee3ce7d908623c8c2b79",
".git/objects/b0/07999312e9797b423ab51b9db7b3c409b627bc": "761e025c816b2a06606f29a01f17e7b0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ef/ee8f6f0d377da01ab967ddc4320dc86031bbf8": "5e16be3c33d7dabccfe7e11cc3e57039",
".git/objects/fa/b81e2a70a2162a482364a959815373dcf57bdd": "59955b356a95735cbbbfffaba2d19cc2",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "63b148d9ddd47a6026ac08808bf4e2bf",
".git/objects/ce/b2a12a64183a1b7e126725f524f04f4ceb1d3f": "1bd1c2234e79580caacd47615d6f7352",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/46/ff1bd50067731467df4c95528958048d81e1a9": "7b198e6450c577d3c2466aa0263d0e12",
".git/objects/83/64397c186c20ebb93ce6ab7a54147e16d1288a": "47c11ed7de8650f8a0b62962997dbb4a",
".git/objects/1b/a66615ed4682c0521d7d43e0a7e8f6d0e7bf39": "6cf9a187afd0bd4eb70d7f2fc41304b1",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "54cde8761ce732c59ea0d2c4e64bc734",
".git/objects/48/adf2b5e2add1cb8aba9733ef45702463cea186": "980b3c3c06b91fd30e338cbfd5c62edc",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "510800b6a1581fb2bceea8455f77d3a0",
".git/objects/4f/21db307e66463d05b7ff2acee9141b128d96da": "85c7da66431faebe4f0c58e44b8afe96",
".git/objects/12/11e929871b7d64163b5ad3890513633b51eea4": "d63a5e0821ee76ddbdc100ada0e8e601",
".git/objects/85/f0f0ccdce36285e8a283098215cf24d9102d10": "d2096d675f042e3ca7efed265289b394",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "8fda235814acf392f50dd9a4feb7db11",
".git/objects/40/f4a6c50fa3ca8ccf7b713ac906e5b89c85d43b": "3cb10087bddc74d6929ddb92798ac27b",
".git/objects/78/37fdb2b9396e4d0b9c109bd883dcb2322b8117": "3779f8f558cb6ace65e404fab7dacd6d",
".git/objects/8b/b7e2746f8074b529d93b92b6372c76e9b80863": "de35001ffecb293a8a743c79db4ee80b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7909d438d590f164deab50c335ceb405",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90b9c9da96f24348fab0aa4c40b8bb66",
".git/logs/refs/heads/main": "90b9c9da96f24348fab0aa4c40b8bb66",
".git/logs/refs/remotes/origin/main": "c08ddf2e4543a8f65713e41ad344a00a",
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
".git/refs/heads/main": "e108d48f50db7535c7a2d98d5b0af3be",
".git/refs/remotes/origin/main": "e108d48f50db7535c7a2d98d5b0af3be",
".git/index": "20ea9489c7dcac9380c376c07edca87f",
".git/COMMIT_EDITMSG": "126d3b6e5e3a7200901efd4f24101c6d",
"assets/AssetManifest.json": "a794cc4db63f9304408292e490437d4b",
"assets/NOTICES": "25ad8c4fa30d9a2542a58734d173f3dc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "e7e9f46ef35b8ef45d06ad8344b038a7",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/audios/heartbeat.mp3": "52db9c69fefe77865d63176f0e097d2c",
"assets/assets/audios/music.mp3": "a041a9c530378af2569c901e917a5b0c",
"assets/assets/audios/seed-planting.mp3": "b91173839bfdb8a2ac64199e02bea3a8",
"assets/assets/images/tomato-crop.png": "ee8cd27155ecebe4e351d366b6b2b64a",
"assets/assets/images/advisor.png": "db3807644921f859f6e7d96544e84005",
"assets/assets/images/dead-crop.png": "6d9683fdceba302c342273bccfaed322",
"assets/assets/images/growing-crop.png": "e24b942f619b3af8f973c47d1cc76725",
"assets/assets/images/farmer.png": "a646860321b92c2c4259417bc26b10a1",
"assets/assets/images/seeds.png": "539353443d8057b53da1b7f410edf9ed",
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

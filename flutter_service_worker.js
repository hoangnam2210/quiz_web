'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "19bc717bd7b4c2b06d661a5e73d183d3",
"version.json": "5f13eeaebfdbf2b505032f3c0bd3ddc3",
"index.html": "31e2df9bc4daecdea57658eea30978b0",
"/": "31e2df9bc4daecdea57658eea30978b0",
"main.dart.js": "1f6f85b111e04cc84a3d4e72780ca67c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
".history/index_20251014194851.html": "ae0125e9f1eaafc6a6214ca093743709",
".history/index_20251013233122.html": "31e2df9bc4daecdea57658eea30978b0",
".history/index_20251013233243.html": "ae0125e9f1eaafc6a6214ca093743709",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f386d42a6c344161646bc03ab284e8b",
".git/ORIG_HEAD": "6934122dd1a1ea95d52817eaf3c7c9d9",
".git/config": "f5705f0dfd37364f8d38c29b0b2c4ed8",
".git/objects/59/0fd93fa4fb35959069ab3280fc59ef7d7b7ea8": "f158ad1eee5631e63e4e3892bab50944",
".git/objects/59/a78a65a673d78fa1f6fd26fb771ab6b2dfd41d": "096cc9a440d888c0d006830100238edc",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/8e7734f3714b250a4ebf730e4dfd1a5b85ef62": "d54d65a55596faaef1cbcea3ca4f7cd4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/ab00ba216083a43584aec98d1180c97df30f44": "bf37b201b84e8824d18107714158e67e",
".git/objects/32/fb81434dbdce5d3c0cc5a7b49ae6ac25b6f2ff": "63f8f438a85e82294bb77b11365331e3",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/71c8318c4e2af34c49357a093f43d64cae1000": "45c09764d64ed05b806ab3c34fcce66d",
".git/objects/3d/5a47e13bbd1ea763ec1c359ef6e639c1679a8c": "843bc8396c2e8419ca8b9dc98f5a3f7b",
".git/objects/58/c3489c60f8221ad8721619f529889770a2d8d3": "28fcdf13c6d683aaf37c8c392aae3bf6",
".git/objects/60/44edf31d7b15618968c55197d93558a49e34bf": "b94e23e3636ec7ac8612c57e00734d5d",
".git/objects/5f/34c85dbb97ef3682e6c92da223e8d5edeff0d8": "6f691c0ec14ae29b238132b2e02abca3",
".git/objects/b5/918c49da58497cff54be8f2e27f7e33c2aa7a5": "5b55ee6e820daea3f793fba39e3e4154",
".git/objects/bb/a675de1d708fb8106406011715a54ab3fbb03a": "f26b9bbabd997d74cc5d2e3e0a8dde03",
".git/objects/b3/8828c628daea95b6aecac2eef104e2fdbbad02": "11c53d29ae742af37097e654ba4a6005",
".git/objects/a5/39dd94de782d7fa1295c9132dbe680afdb68d4": "4ff886ac2653ddd97669b1b83ef643e5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/121fa480e290a0691a81e1c1c24f5a35ff8e7e": "b5fee7e3d6a8d91c8099c054a0697b11",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/a1f38c58fbbe8c98a9aabc16fa50dfa7ccc465": "318dca5742c83a9b7340a32a34892e05",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/18f0b49f17ed57ac841f426bf27d538193a73b": "dd5fcc619b1a2ba3adbc7c562cb5588a",
".git/objects/cf/641742eff106b34a66a5f8eddd77aec6b1e670": "ba993a4e7bca80104b28409238ecf0cf",
".git/objects/cf/3efd23c63d5e07b815276a1b07080bfb80fe89": "905f0d121db7eb5bcbda7544ae000352",
".git/objects/ca/93fa0ed8ad3bd5e6f8e343890ede22c1312da1": "1e8e92add437ce9902ac013152d65a5f",
".git/objects/ed/7a276a334938f023cfdb1227eff88a302b7499": "18222438ad0c5ea929267447397055d5",
".git/objects/c1/a3dc8e5b5d4dcbed630b9d0fcef3d74a47e366": "42da88759ff9af56c6c43a4a948899e8",
".git/objects/c1/38f46ee3c6772cc0862c04ad4a20fb82e4ae19": "557c9550771fc5e7636c1c5d3d247bde",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/277001d17bed6253b50aef4d947d470994324c": "9d74048229ca89b81c064d2a1e9ff8e2",
".git/objects/4e/1ce382c2dff1117f9ca9be14b60643dfcbba67": "6bfe24afd373e4eabcf8118cc709d630",
".git/objects/4e/9c6810417086ca935dfe8386606af7b0516ec5": "7d367a7937ef2f15748445965312349e",
".git/objects/27/0a86c3a3989d87049673b52fa12b7f0c9fadb2": "f042c152e804d79b601acb524247ed74",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/11/621b04b0594e8c27ec04d75af89571f39bded0": "16d0316ad599806f7f0176e746ebab2b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/1850b181add47762ea19a74ee68505c678e716": "9ff34a1980edfe5901738b6d951745a4",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/17/c6dd3f3f5acf5437303ec887f273fd47e2a01e": "205255253177556439c56205c69adb02",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/8e5b7bb64c92fc682f23d68210c61a621d237d": "57e0cb0e3268551ab50b84c4567a1057",
".git/objects/86/78faa1cb417c5d08e176ff4a4d177c087ff58a": "e70cc01f92630e958aab11c3302db8bb",
".git/objects/88/0b3cb3d358bf4a987a4355142dff8eb404d070": "496e683c20b9f79ca338f74c2af56175",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/7b23c7437cb5b09145204f6152687feff42bdb": "21f7d17ea31af263082763a536a2a6a7",
".git/objects/6b/b5ddaea0dfe48b7ede100cf0eaa761fc50f776": "52b0bf446693e382b6c02bf65f1b4b35",
".git/objects/6b/77586e5c29516d9b070c8b3319cdc9a0be7e45": "a1dbf4d3f7b393f849022230d89f52d4",
".git/objects/09/04d164e0b949ecd7073cf5126cfb66b137d69c": "ceea45ce3989e2a61ec46c550c828356",
".git/objects/31/21a78b8f11e42804eeb359dcfeb30cb965f3fc": "64d6ed8446dd6eb8c9488244197b6e78",
".git/objects/3f/7443da398a7962ceb395a8b4363790b5b6d7ba": "aa9ff0956a082a8ec738272f2146c64b",
".git/objects/30/b09f471916f2fee28b059b6d062e2b4df80402": "59fef5211afcfebe65d34ccb2057d081",
".git/objects/5e/e53553314bee740ed529cc0782c18a8878e757": "7572e5ba67e7d10bc0794ed512fb60fa",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/4ae2649d241067da0fc1d4d814c172016538c5": "81fe4143d3c7c05fa6179926d12af748",
".git/objects/99/7c472c0da53a3f4cda7da340670c8127cb73c4": "0addd616dae79d6b3852aa746cd3173c",
".git/objects/52/a15a604bcd80d6a3b37ee71e0b25284b35ab24": "b78d809f5482cb22c643558016f7e0a8",
".git/objects/97/ce2635ca820ffadc0db66b267c56c40bcb8df6": "9d49b8dc994769338d4625d611470a53",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/27266c343ec5fbd2138ab43a9a69bee3c5ea7e": "64371fd33d790669804792432000dae4",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/0a537053e935a9ee2e8905110ab59b3dbb4e4c": "5adbe9c619b36010357196cf40b3e80f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/6ab11146282cb39034e240d6ebde9c444e1d07": "a7cb92b0100289f25bc8e5909cb2409f",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/fe6abba2e56931ce62b6bf16b39a642644577b": "057de9842d566660eeb6b2045bca40f5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/0861921757deed001b52e1cf52398e8d064e1f": "d39c0a538f0825115f47534b0f809f97",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/c51330b63aaf9394112568ce26370183b9e4f0": "0aa96d9fda184272342baffdee60ae2f",
".git/objects/e1/667bbb08d51a1edcae290dc47aada20b9bb279": "9d68b2b9a2bc2d08a99f5e67883f605c",
".git/objects/cd/aadf47a579677992a4d3bf71bc729793a91d32": "910f9b96daf92f09787ba2a1ddc10453",
".git/objects/f9/ee7e2a539c54267a5be19fef3ae5676e7e19bc": "12b54c5de6e2bf7ad25dc2d76e4374b5",
".git/objects/f7/6b42f0de6bff0f44e4ebc3f703cc5213db008e": "2c6768fd4ba66d603ef7d8da61482e93",
".git/objects/fa/58e3991fedb744f60171b72cbdf7592ad8249e": "2c6753c250c5aee0f47dcc7db6cd6d37",
".git/objects/e9/a6a4de77ae80453507efe9b44976a3087b1a63": "52b47ffaf69d8eb3ce7e75bb29eb3529",
".git/objects/f1/8ff6157020650958fe10dcf0916311b5b87a00": "1b691c59dd63767ef6d29535174ead0f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/75e162c9aefa77a50a350b06034f712de76859": "77903c372202038869d1042c75ed56f6",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1b/aacb92004861975baa9274d98e5c59c087579a": "8c9023fb5efea6ad9ca0e6d054265681",
".git/objects/1e/ed83ac666afb7bc6642d1ee589593b6b57549b": "c63a83fc6cccd2aa0d7ad7e764811674",
".git/objects/24/02b5184382dbde5cc8538a7f7c617b99567fd8": "de3861c364c852a9d313907aa742493a",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/0fa440a00beaa64fcd8c96b9923447e725d797": "e5f5b51cf2daf53e5f0fcdd8ef9e46b8",
".git/objects/12/ca730eb27e1c381555b52fd9182f439206539c": "a355ae8ecc841470d673afa3e5590c73",
".git/objects/8c/51992d56400ff7424ea9b4d7919083b858994f": "5fdc9453607eff20d1d8bd9a9eeb2117",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/b35d7adf74657b2b8a871915c201f5bb8ef942": "61f3b5fadf2538dc437b8f5c271e6f7e",
".git/objects/71/ed5cfc92f54f20bd9794c91007f7efccc8612c": "5ece2973b4bf3a3bcca1faee7f39ccf7",
".git/objects/78/8fd3e18ee7f25950b891818cbe16389d309d63": "a19a996385c389084e67a693191af448",
".git/objects/8b/dc4fdbade2588b8ac6bb68d47b7dd895433c36": "63c816391ab74b2041bc3c26441c3c5c",
".git/objects/7a/7820b8fa21899512091184e73bd695713efa0f": "d77159b5c93207742cb29d81634a3866",
".git/objects/7a/014c9f40369beb1d8e067f31b8ff2ff167e2cb": "d3c8146306dd7dcd98075fe94dd264b9",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42f2b07b88b9e728f1d5665e8a39be5a",
".git/logs/refs/heads/main": "e9517c2d5d687e3a3a4c8f1ed1e95355",
".git/logs/refs/remotes/origin/main": "96045b5de5dc190c7fe50148c8defba0",
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
".git/refs/heads/main": "b3cea4918a4134157d8688a9334ce7ef",
".git/refs/remotes/origin/main": "b3cea4918a4134157d8688a9334ce7ef",
".git/index": "2cf3ff84add971156f4bd66c1809ab15",
".git/COMMIT_EDITMSG": "285fc2c6b7efbe0e5243b62c0d2eb053",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "f35b81da9583a26447a7ad3ea6a4d503",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "e8a3583324de328b697d2d066881d6d3",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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

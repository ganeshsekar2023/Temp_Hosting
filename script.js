  var asbFSPluginVersion = "20220310-1300";
  var pageUrl = location.href;
  var domainUrl = document.domain;
  var pageQuery = null;
  var iframeHasSameDomainUrl = true;
  var defaultConfig = {
    discount: 5,
    addlLeadTime: 2,
    moq: 6,
    moqPrice: 60,
  };
  var categoryArray = [
    {
      name: "fanwear",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "lacrosse",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "baseball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "basketball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "soccer",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "football",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "fleece",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "track",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "training",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "softball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "polo",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "5-day-turbo",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "volleyball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "babe-ruth-turbo",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "accessories",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "compression",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "semi-sublimated",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "default-page",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "search-display-view-tags",
      tag: "search-display-view-tags",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "search-display-view-term",
      searchTerm: "search-display-view-tags",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "custom-headwear",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "styles",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "running-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "beanies-knits",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "camo-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "on-field-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "lifestyle-outdoor-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "sideline-coaches-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "trucker-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "visors",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "boonie-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "features",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "flexfit-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "snapback-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "structured-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "unstructured-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
  ];
  var categoryShareMapper = {
    fanwear: "fanwear",
    lacrosse: "lacrosse",
    baseball: "baseball",
    basketball: "basketball",
    soccer: "soccer",
    football: "football",
    fleece: "fleece",
    outerwear: "fleece",
    track: "track",
    training: "training",
    softball: "softball",
    polos: "polo",
    turbo: "5-day-turbo",
    volleyball: "volleyball",
    "babe ruth turbo": "babe-ruth-turbo",
    "masks, gaiters,": "accessories",
    compression: "compression",
    "semi-sublimated": "semi-sublimated",
    "freestyle sublimation": "default-page",
    "search-display-view-tags": "search-display-view-tags",
    "search-display-view-term": "search-display-view-term",
    "custom headwear": "custom-headwear",
    styles: "styles",
    "active/lightweight": "running-hats",
    beanies: "beanies-knits",
    camo: "camo-hats",
    "on-field": "on-field-hats",
    outdoor: "lifestyle-outdoor-hats",
    sideline: "sideline-coaches-hats",
    "truckers / mesh back": "trucker-hats",
    visors: "visors",
    "wide brim / boonie": "boonie-hats",
    features: "features",
    flexfit: "flexfit-hats",
    snapback: "snapback-hats",
    structured: "structured-hats",
    unstructured: "unstructured-hats",
  };
  window.onmessage = (e) => {
    var data = e.data.toString();
    if (e.data.domainUrl) {
      iframeHasSameDomainUrl = false;
      pageUrl = e.data.pageUrl;
      pageQuery = e.data.pageQuery;
      var domain = e.data.domainUrl;
      domainUrl = domain.replace(/^https?:\/\//, "");
      setIframeSrc();
      var iframeSrc = getIframeSrc();
    }
    if (data.indexOf("asgIframeHeight") > -1) {
      var iframeHeight = e.data.split(":");
      document.getElementById("iframediv").style.height =
        iframeHeight[1] + "px";
    }
    if (data.indexOf("reLoadIframe") > -1) {
      //document.getElementById("showSummary").style.display = "none";
      setIframeSrc();
    }
    if (data.indexOf("scrollToTop") > -1) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    if (data.indexOf("asgPageName") > -1) {
      var pageName = e.data.split(":");
      if (pageName[1] == "configurator")
        document.getElementById("myIframe").setAttribute("scrolling", "yes");
      else {
        document.getElementById("myIframe").setAttribute("scrolling", "no");
      }
    }
    if (data.indexOf("cartData") > -1) {
      var queryString = getCurrentUrlParams();
      var categoryName = queryString["categoryName"];
      if (categoryName) {
        categoryName = categoryName.toLowerCase();
      } else {
        categoryName = "freestyle sublimation";
      }
      var path = location.origin + location.pathname;

      var obj = data.split("#");
      let objList = obj[1];
      localStorage.setItem("cartObject", objList);
      localStorage.setItem("cartCategoryName", categoryName);
      localStorage.setItem("cartPath", path);
      window.location = "/cart";
    }
  };
  document.querySelector("#myIframe").addEventListener("load", (e) => {
    sendParentHeightToChild();
  });
  function sendParentHeightToChild() {
    var child = document.getElementById("myIframe").contentWindow;
    var elemTop = document.getElementById("iframediv").offsetTop;
    var windowHeight =
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      window.innerHeight;
    var calcHeight = windowHeight - elemTop;
    if (child.postMessage) {
      child.postMessage("parentHeight:" + calcHeight, "*");
      child.postMessage("parentDomain:" + domainUrl, "*");
    }
  }
  function sendDataToChild() {
    var child = document.getElementById("myIframe").contentWindow;
    if (child.postMessage) {
      child.postMessage("loadNextPageIframe", "*");
    }
  }
  function getFullUrl() {
    var searchLocation = false;
    if (window.location) {
      if (window.location.search) {
        if (window.location.search.substr(1)) {
          searchLocation = true;
        }
      }
    }
    if (searchLocation) {
      return window.location.search.substr(1);
    } else {
      var baseUrl = window.document.baseURI;
      var baseUrlData = baseUrl.split("?");
      if (baseUrlData[1] != undefined) {
        return baseUrlData[1];
      }
      return "";
    }
  }
  /* -------------------------------------------- get param url -----------------*/
  function getCurrentUrlParams() {
    if (iframeHasSameDomainUrl === false) {
      return pageQuery;
    } else {
      var operator = "&";
      var getUrl = getFullUrl();
      var queryString = (function (params) {
        if (params === "") return {};
        var obj = {};
        for (var i = 0; i < params.length; ++i) {
          var value = params[i].split("=", 2);
          if (value.length === 1) obj[value[0]] = "";
          else obj[value[0]] = decodeURIComponent(value[1].replace(/\+/g, " "));
        }
        return obj;
      })(getUrl.split(operator));

      return queryString;
    }
  }
  /* -------------------------------------------- set Iframe src -----------------*/
  async function setIframeSrc() {
    var url = await getIframeSrc();
    if (url) {
      document.getElementById("myIframe").src = url;
    } else {
      var iframe = document.getElementById("myIframe");
      iframe.src = iframe.src;
    }
    setTimeout(function () {
      document.getElementById("iframediv").style.display = "block";
      document.getElementById("loaderAlign").style.display = "none";
    }, 1000);
  }

  /* -------------------------------------------- validate function -----------------*/
  function validate(queryString, type) {
    if (queryString) {
      if (queryString[type]) {
        return true;
      }
      return false;
    }
    return false;
  }
  /* -------------------------------------------- get Iframe src -----------------*/
  async function getIframeSrc() {
    var queryString = getCurrentUrlParams();
    var new_url = "";
    if (validate(queryString, "categoryName")) {
      var categoryName = queryString["categoryName"];
      console.log("category Name param", categoryName);
      var value = queryString["styleId"];
      if (validate(queryString, "styleId")) {
        const styleId = queryString["styleId"];
        if (isConfiguratorPageByCapId) {
          new_url = new URL(
            await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            )
          );
          var urlParams = new URLSearchParams(new_url.search);
          if (
            urlParams.has("partNumber") &&
            urlParams.get("partNumber") !== null
          ) {
            return new_url.toString();
          } else {
            return await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            );
          }
        } else if (isConfiguratorPageByStyleId) {
          new_url = new URL(
            await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            )
          );

          var urlParams = new URLSearchParams(new_url.search);
          if (
            urlParams.has("partNumber") &&
            urlParams.get("partNumber") !== null
          ) {
            return new_url.toString();
          } else {
            return await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            );
          }
        } else {
          new_url = new URL(
            await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            )
          );
          var urlParams = new URLSearchParams(new_url.search);
          if (
            urlParams.has("partNumber") &&
            urlParams.get("partNumber") !== null
          ) {
            return new_url.toString();
          } else {
            return await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            );
          }
        }
      } else if (!validate(queryString, "styleId") && categoryName) {
        return await generateUrlByNameWithCapId(
          categoryName.toLowerCase().trim(),
          true
        );
      } else if (categoryName) {
        return generateUrlByNameWithCapId(
          categoryName.toLowerCase().trim(),
          true
        );
      } else if (validate(queryString, "searchTerm")) {
        var searchTerm = queryString["searchTerm"];
        return generateUrlByNameWithCapId("search-display-view-term", false);
      } else if (validate(queryString, "tag")) {
        var tag = queryString["tag"];
        return generateUrlByNameWithCapId("search-display-view-tags", false);
      }
      return generateUrlByNameWithCapId(
        categoryName.toLowerCase().trim(),
        true
      );
    } else {
      var new_url = "";
      if (validate(queryString, "styleId")) {
        const styleId = queryString["styleId"];
        if (await isConfiguratorPageByCapId) {
          new_url = new URL(await generateUrlByNameWithCapId());
        } else {
          new_url = new URL(await generateUrlByNameWithCapId());
        }
        var urlParams = new URLSearchParams(new_url.search);
        if (
          urlParams.has("partNumber") &&
          urlParams.get("partNumber") !== null
        ) {
          return new_url.toString();
        } else {
          return await generateUrlByNameWithCapId(categoryName);
        }
      }
      var urlParams = new URLSearchParams(new_url.search);
      if (
        urlParams &&
        urlParams.has("partNumber") &&
        urlParams.get("partNumber") !== null
      ) {
        return new_url.toString();
      } else {
        return await generateUrlByNameWithCapId(categoryName);
      }
      var currentURL = pageUrl;
      var url = currentURL.split("?");
      var urlArray = url[0];
      var urlHrefArray = urlArray.split("/");
      var categoryName = null;
      urlHrefArray.forEach(function (urlEntity) {
        categoryArray.forEach(function (category) {
          if (
            urlEntity.toLowerCase().trim() ===
            category.name.toLowerCase().trim()
          ) {
            categoryName = category.name.toLowerCase().trim();
          }
        });
      });
      return await generateUrlByNameWithCapId(categoryName);
    }
  }

  /* -------------------------------------------- check config page -----------------*/
  function isConfiguratorPage() {
    var queryString = getCurrentUrlParams();
    if (validate(queryString, "sNumber")) {
      return true;
    }
    return false;
  }
  /* -------------------------------------------- check configbystyleId page -----------------*/
  async function isConfiguratorPageByStyleId() {
    var queryString = getCurrentUrlParams();
    var value = queryString["styleId"];
    const productData = await getCardData(value);
    if (
      productData &&
      productData.hasOwnProperty("partNumber") &&
      productData.hasOwnProperty("designLine") &&
      productData.hasOwnProperty("iNumber")
    ) {
      return true;
    } else {
      return false;
    }
  }
  /* -------------------------------------------- check configbyCapId page -----------------*/
  async function isConfiguratorPageByCapId() {
    var queryString = getCurrentUrlParams();
    var value = queryString["styleId"];
    const productData = await getCardData(value);
    console.log("product cap data", productData);
    if (
      productData &&
      productData.hasOwnProperty("partNumber") &&
      !productData.hasOwnProperty("designLine") &&
      !productData.hasOwnProperty("iNumber")
    ) {
      // alert("true cap");
      return true;
    } else {
      // alert("false cap");
      return false;
    }
  }
  /* -------------------------------------------- check cap  config page -----------------*/
  function isCapConfiguratorPage() {
    var queryString = getCurrentUrlParams();
    if (validate(queryString, "dNumber")) {
      return true;
    }
    return false;
  }
  /* -------------------------------------------- check category name -----------------*/
  function checkCategory(categoryName) {
    const category = categoryArray.filter((item) => item.name === categoryName);
    if (category.length) {
      return true;
    }
    return false;
  }
  /* -------------------------------------------- API CALL for product item by style id -----------------*/
  async function getCardData(value) {
    try {
      var apiUrl =
        "https://n4nf1c.a.searchspring.io/api/search/autocomplete.json";
      var siteId = "n4nf1c";
      var resultsPerPage = 5;
      var resultsFormat = "native";
      var isSearchEnabled = true;

      var updatedUrl =
        apiUrl +
        "?siteId=" +
        siteId +
        "&q=" +
        value +
        "&resultsPerPage=" +
        resultsPerPage +
        "&resultsFormat=" +
        resultsFormat +
        "&filter.is_search_enabled=" +
        isSearchEnabled;
      const response = await fetch(updatedUrl);
      if (response.ok) {
        const data = await response.json();
        console.log("card item data after api call", data);
        if (data?.results && data.results.length > 0) {
          var productNumber = data?.results[0].product_number;
          var product_category = data?.results[0].product_category;
          var colorImagesHTML = data?.results[0]?.color_images;
          var colorImagesJSON = JSON.parse(htmlEntitiesDecode(colorImagesHTML));
          if (product_category === "Sublimated" && value === productNumber) {
            var partNumber = "CUT" + "_" + value;
            var designLineThumbImage = colorImagesJSON[0].designLineThumbImage;
            var match = designLineThumbImage.match(/S(\d+)_/);
            var extractedImageNumber = match
              ? match[1]
              : colorImagesJSON[1].designLineThumbImage.match(/S(\d+)_/)[1];
            var designLine = colorImagesJSON[0].designLineName.replace(
              /\s/g,
              "%20"
            );
            var product_category = data?.results[0].product_category;
            var iNumber = value + "_" + designLine + "_" + extractedImageNumber;
            return {
              partNumber: partNumber,
              designLine: designLine,
              iNumber: iNumber,
            };
          } else if (product_category == "Stock" && value === productNumber) {
            var capColorCode = colorImagesJSON[0].colorCode;
            return {
              partNumber: value,
              capColorCode: capColorCode,
            };
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      throw error;
      console.log("Card API call error", error);
    }
    function htmlEntitiesDecode(text) {
      var textArea = document.createElement("textarea");
      textArea.innerHTML = text;
      return textArea.value;
    }
  }
  /* -------------------------------------------- generate url by category name and just CapID and not Style Id -----------------*/
  async function generateUrlByNameWithCapId(categoryName, isCategoryName) {
    var currentIframeUrl = document.getElementById("myIframe").src;
    var queryString = getCurrentUrlParams();
    var replaceText = "custom-sublimation";
    if (categoryName) {
      replaceText = "custom-sublimation-" + categoryName;
      var value = queryString["styleId"];
      if (value) {
        if (await isConfiguratorPageByCapId()) {
          replaceText = "CapConfigurator";
          var Index = categoryArray.findIndex(
            (x) => x.name.toLowerCase().trim() === categoryName
          );
          var categoryObj = categoryArray[Index];
          const value = queryString["styleId"];
          const customObject = await getCardData(value);
          for (const key in customObject) {
            if (customObject.hasOwnProperty(key)) {
              categoryObj[key] = customObject[key];
            }
          }
          categoryArray[Index] = categoryObj;
        } else if (await isConfiguratorPageByStyleId()) {
          replaceText = "Configurator";
          var Index = categoryArray.findIndex(
            (x) => x.name.toLowerCase().trim() === categoryName
          );
          var categoryObj = categoryArray[Index];
          const value = queryString["styleId"];
          const customObject = await getCardData(value);
          for (const key in customObject) {
            if (customObject.hasOwnProperty(key)) {
              categoryObj[key] = customObject[key];
            }
          }
          categoryArray[Index] = categoryObj;
        } else {
          replaceText = "custom-sublimation-" + categoryName;
        }
      } else if (isConfiguratorPage()) {
        replaceText = "Configurator";
        categoryName = categoryShareMapper[categoryName];
      } else if (isCapConfiguratorPage()) {
        replaceText = "CapConfigurator";
        categoryName = categoryShareMapper[categoryName];
      } else if (!isCategoryName) {
        replaceText = "SearchDisplayView";
        categoryName = categoryShareMapper[categoryName];
      } else if (
        categoryName === "5-day-turbo" ||
        categoryName === "semi-sublimated"
      ) {
        replaceText = categoryName;
      } else if (!checkCategory(categoryName)) {
        categoryName = "default-page";
        replaceText = "custom-sublimation";
      }
    } else {
      categoryName = "default-page";
      if (await isConfiguratorPageByCapId()) {
        replaceText = "CapConfigurator";
        var Index = categoryArray.findIndex(
          (x) => x.name.toLowerCase().trim() === categoryName
        );
        var categoryObj = categoryArray[Index];
        const value = queryString["styleId"];
        const customObject = await getCardData(value);
        for (const key in customObject) {
          if (customObject.hasOwnProperty(key)) {
            categoryObj[key] = customObject[key];
          }
        }
        categoryArray[Index] = categoryObj;
      } else if (await isConfiguratorPageByStyleId()) {
        replaceText = "Configurator";
        var Index = categoryArray.findIndex(
          (x) => x.name.toLowerCase().trim() === categoryName
        );
        var categoryObj = categoryArray[Index];
        const value = queryString["styleId"];
        const customObject = await getCardData(value);
        for (const key in customObject) {
          if (customObject.hasOwnProperty(key)) {
            categoryObj[key] = customObject[key];
          }
        }
        categoryArray[Index] = categoryObj;
      }
    }
    var Index = categoryArray.findIndex(
      (x) => x.name.toLowerCase().trim() === categoryName
    );
    var categoryObj = categoryArray[Index];
    var url = currentIframeUrl.split("?");
    var urlArray = url[0];
    var paramsArray = url[1];
    var urlHrefArray = urlArray.split("/");
    var urlHrefReplaceEntity = urlHrefArray[urlHrefArray.length - 1];
    url[0] = urlArray.replace(urlHrefReplaceEntity, replaceText);
    var newUrl = url.join("?");
    var href = new URL(newUrl);
    var categoryObjLength = Object.keys(categoryObj).length;
    if (categoryObjLength) {
      Object.keys(categoryObj).forEach(function (key) {
        href.searchParams.delete(key);
        if (key == "tag") {
          value = queryString["tag"];
          href.searchParams.set(key, value);
        } else if (key == "searchTerm") {
          value = queryString["searchTerm"];
          href.searchParams.set(key, value);
        } else {
          href.searchParams.set(key, categoryObj[key]);
        }
      });
    }
    if (isConfiguratorPage() || isCapConfiguratorPage()) {
      Object.keys(queryString).forEach(function (key) {
        href.searchParams.delete(key);
        href.searchParams.set(key, queryString[key]);
      });
    }
    return href.toString();
  }
  /* -------------------------------------------- function scroll view -----------------*/
  function isScrolledIntoView() {
    var elem = document.getElementById("iframediv");
    var docViewTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    var docViewBottom = docViewTop + windowHeight;
    var elemTop = elem.offsetTop;
    var elemBottom = elemTop + elem.offsetHeight;
    return elemBottom <= docViewBottom;
  }

  /* -------------------------------------------- page Load function -----------------*/
  function pageLoad() {
    setIframeSrc();
    window.onscroll = function () {
      if (isScrolledIntoView()) {
        sendDataToChild();
      }
    };
  }
  pageLoad();
  window.onload = function () {

      var asbFSPluginVersion = "20220310-1300";
  var pageUrl = location.href;
  var domainUrl = document.domain;
  var pageQuery = null;
  var iframeHasSameDomainUrl = true;
  var defaultConfig = {
    discount: 5,
    addlLeadTime: 2,
    moq: 6,
    moqPrice: 60,
  };
  var categoryArray = [
    {
      name: "fanwear",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "lacrosse",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "baseball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "basketball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "soccer",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "football",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "fleece",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "track",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "training",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "softball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "polo",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "5-day-turbo",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "volleyball",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "babe-ruth-turbo",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "accessories",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "compression",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "semi-sublimated",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "default-page",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "search-display-view-tags",
      tag: "search-display-view-tags",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "search-display-view-term",
      searchTerm: "search-display-view-tags",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "custom-headwear",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "styles",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "running-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "beanies-knits",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "camo-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "on-field-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "lifestyle-outdoor-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "sideline-coaches-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "trucker-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "visors",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "boonie-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "features",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "flexfit-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "snapback-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "structured-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
    {
      name: "unstructured-hats",
      discount: defaultConfig.discount,
      addlLeadTime: defaultConfig.addlLeadTime,
      moq: defaultConfig.moq,
      moqPrice: defaultConfig.moqPrice,
    },
  ];
  var categoryShareMapper = {
    fanwear: "fanwear",
    lacrosse: "lacrosse",
    baseball: "baseball",
    basketball: "basketball",
    soccer: "soccer",
    football: "football",
    fleece: "fleece",
    outerwear: "fleece",
    track: "track",
    training: "training",
    softball: "softball",
    polos: "polo",
    turbo: "5-day-turbo",
    volleyball: "volleyball",
    "babe ruth turbo": "babe-ruth-turbo",
    "masks, gaiters,": "accessories",
    compression: "compression",
    "semi-sublimated": "semi-sublimated",
    "freestyle sublimation": "default-page",
    "search-display-view-tags": "search-display-view-tags",
    "search-display-view-term": "search-display-view-term",
    "custom headwear": "custom-headwear",
    styles: "styles",
    "active/lightweight": "running-hats",
    beanies: "beanies-knits",
    camo: "camo-hats",
    "on-field": "on-field-hats",
    outdoor: "lifestyle-outdoor-hats",
    sideline: "sideline-coaches-hats",
    "truckers / mesh back": "trucker-hats",
    visors: "visors",
    "wide brim / boonie": "boonie-hats",
    features: "features",
    flexfit: "flexfit-hats",
    snapback: "snapback-hats",
    structured: "structured-hats",
    unstructured: "unstructured-hats",
  };
  window.onmessage = (e) => {
    var data = e.data.toString();
    if (e.data.domainUrl) {
      iframeHasSameDomainUrl = false;
      pageUrl = e.data.pageUrl;
      pageQuery = e.data.pageQuery;
      var domain = e.data.domainUrl;
      domainUrl = domain.replace(/^https?:\/\//, "");
      setIframeSrc();
      var iframeSrc = getIframeSrc();
    }
    if (data.indexOf("asgIframeHeight") > -1) {
      var iframeHeight = e.data.split(":");
      document.getElementById("iframediv").style.height =
        iframeHeight[1] + "px";
    }
    if (data.indexOf("reLoadIframe") > -1) {
      //document.getElementById("showSummary").style.display = "none";
      setIframeSrc();
    }
    if (data.indexOf("scrollToTop") > -1) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    if (data.indexOf("asgPageName") > -1) {
      var pageName = e.data.split(":");
      if (pageName[1] == "configurator")
        document.getElementById("myIframe").setAttribute("scrolling", "yes");
      else {
        document.getElementById("myIframe").setAttribute("scrolling", "no");
      }
    }
    if (data.indexOf("cartData") > -1) {
      var queryString = getCurrentUrlParams();
      var categoryName = queryString["categoryName"];
      if (categoryName) {
        categoryName = categoryName.toLowerCase();
      } else {
        categoryName = "freestyle sublimation";
      }
      var path = location.origin + location.pathname;

      var obj = data.split("#");
      let objList = obj[1];
      localStorage.setItem("cartObject", objList);
      localStorage.setItem("cartCategoryName", categoryName);
      localStorage.setItem("cartPath", path);
      window.location = "/cart";
    }
  };
  document.querySelector("#myIframe").addEventListener("load", (e) => {
    sendParentHeightToChild();
  });
  function sendParentHeightToChild() {
    var child = document.getElementById("myIframe").contentWindow;
    var elemTop = document.getElementById("iframediv").offsetTop;
    var windowHeight =
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      window.innerHeight;
    var calcHeight = windowHeight - elemTop;
    if (child.postMessage) {
      child.postMessage("parentHeight:" + calcHeight, "*");
      child.postMessage("parentDomain:" + domainUrl, "*");
    }
  }
  function sendDataToChild() {
    var child = document.getElementById("myIframe").contentWindow;
    if (child.postMessage) {
      child.postMessage("loadNextPageIframe", "*");
    }
  }
  function getFullUrl() {
    var searchLocation = false;
    if (window.location) {
      if (window.location.search) {
        if (window.location.search.substr(1)) {
          searchLocation = true;
        }
      }
    }
    if (searchLocation) {
      return window.location.search.substr(1);
    } else {
      var baseUrl = window.document.baseURI;
      var baseUrlData = baseUrl.split("?");
      if (baseUrlData[1] != undefined) {
        return baseUrlData[1];
      }
      return "";
    }
  }
  /* -------------------------------------------- get param url -----------------*/
  function getCurrentUrlParams() {
    if (iframeHasSameDomainUrl === false) {
      return pageQuery;
    } else {
      var operator = "&";
      var getUrl = getFullUrl();
      var queryString = (function (params) {
        if (params === "") return {};
        var obj = {};
        for (var i = 0; i < params.length; ++i) {
          var value = params[i].split("=", 2);
          if (value.length === 1) obj[value[0]] = "";
          else obj[value[0]] = decodeURIComponent(value[1].replace(/\+/g, " "));
        }
        return obj;
      })(getUrl.split(operator));

      return queryString;
    }
  }
  /* -------------------------------------------- set Iframe src -----------------*/
  async function setIframeSrc() {
    var url = await getIframeSrc();
    if (url) {
      document.getElementById("myIframe").src = url;
    } else {
      var iframe = document.getElementById("myIframe");
      iframe.src = iframe.src;
    }
    setTimeout(function () {
      document.getElementById("iframediv").style.display = "block";
      document.getElementById("loaderAlign").style.display = "none";
    }, 1000);
  }

  /* -------------------------------------------- validate function -----------------*/
  function validate(queryString, type) {
    if (queryString) {
      if (queryString[type]) {
        return true;
      }
      return false;
    }
    return false;
  }
  /* -------------------------------------------- get Iframe src -----------------*/
  async function getIframeSrc() {
    var queryString = getCurrentUrlParams();
    var new_url = "";
    if (validate(queryString, "categoryName")) {
      var categoryName = queryString["categoryName"];
      console.log("category Name param", categoryName);
      var value = queryString["styleId"];
      if (validate(queryString, "styleId")) {
        const styleId = queryString["styleId"];
        if (isConfiguratorPageByCapId) {
          new_url = new URL(
            await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            )
          );
          var urlParams = new URLSearchParams(new_url.search);
          if (
            urlParams.has("partNumber") &&
            urlParams.get("partNumber") !== null
          ) {
            return new_url.toString();
          } else {
            return await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            );
          }
        } else if (isConfiguratorPageByStyleId) {
          new_url = new URL(
            await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            )
          );

          var urlParams = new URLSearchParams(new_url.search);
          if (
            urlParams.has("partNumber") &&
            urlParams.get("partNumber") !== null
          ) {
            return new_url.toString();
          } else {
            return await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            );
          }
        } else {
          new_url = new URL(
            await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            )
          );
          var urlParams = new URLSearchParams(new_url.search);
          if (
            urlParams.has("partNumber") &&
            urlParams.get("partNumber") !== null
          ) {
            return new_url.toString();
          } else {
            return await generateUrlByNameWithCapId(
              categoryName.toLowerCase().trim(),
              true
            );
          }
        }
      } else if (!validate(queryString, "styleId") && categoryName) {
        return await generateUrlByNameWithCapId(
          categoryName.toLowerCase().trim(),
          true
        );
      } else if (categoryName) {
        return generateUrlByNameWithCapId(
          categoryName.toLowerCase().trim(),
          true
        );
      } else if (validate(queryString, "searchTerm")) {
        var searchTerm = queryString["searchTerm"];
        return generateUrlByNameWithCapId("search-display-view-term", false);
      } else if (validate(queryString, "tag")) {
        var tag = queryString["tag"];
        return generateUrlByNameWithCapId("search-display-view-tags", false);
      }
      return generateUrlByNameWithCapId(
        categoryName.toLowerCase().trim(),
        true
      );
    } else {
      var new_url = "";
      if (validate(queryString, "styleId")) {
        const styleId = queryString["styleId"];
        if (await isConfiguratorPageByCapId) {
          new_url = new URL(await generateUrlByNameWithCapId());
        } else {
          new_url = new URL(await generateUrlByNameWithCapId());
        }
        var urlParams = new URLSearchParams(new_url.search);
        if (
          urlParams.has("partNumber") &&
          urlParams.get("partNumber") !== null
        ) {
          return new_url.toString();
        } else {
          return await generateUrlByNameWithCapId(categoryName);
        }
      }
      var urlParams = new URLSearchParams(new_url.search);
      if (
        urlParams &&
        urlParams.has("partNumber") &&
        urlParams.get("partNumber") !== null
      ) {
        return new_url.toString();
      } else {
        return await generateUrlByNameWithCapId(categoryName);
      }
      var currentURL = pageUrl;
      var url = currentURL.split("?");
      var urlArray = url[0];
      var urlHrefArray = urlArray.split("/");
      var categoryName = null;
      urlHrefArray.forEach(function (urlEntity) {
        categoryArray.forEach(function (category) {
          if (
            urlEntity.toLowerCase().trim() ===
            category.name.toLowerCase().trim()
          ) {
            categoryName = category.name.toLowerCase().trim();
          }
        });
      });
      return await generateUrlByNameWithCapId(categoryName);
    }
  }

  /* -------------------------------------------- check config page -----------------*/
  function isConfiguratorPage() {
    var queryString = getCurrentUrlParams();
    if (validate(queryString, "sNumber")) {
      return true;
    }
    return false;
  }
  /* -------------------------------------------- check configbystyleId page -----------------*/
  async function isConfiguratorPageByStyleId() {
    var queryString = getCurrentUrlParams();
    var value = queryString["styleId"];
    const productData = await getCardData(value);
    if (
      productData &&
      productData.hasOwnProperty("partNumber") &&
      productData.hasOwnProperty("designLine") &&
      productData.hasOwnProperty("iNumber")
    ) {
      return true;
    } else {
      return false;
    }
  }
  /* -------------------------------------------- check configbyCapId page -----------------*/
  async function isConfiguratorPageByCapId() {
    var queryString = getCurrentUrlParams();
    var value = queryString["styleId"];
    const productData = await getCardData(value);
    console.log("product cap data", productData);
    if (
      productData &&
      productData.hasOwnProperty("partNumber") &&
      !productData.hasOwnProperty("designLine") &&
      !productData.hasOwnProperty("iNumber")
    ) {
      // alert("true cap");
      return true;
    } else {
      // alert("false cap");
      return false;
    }
  }
  /* -------------------------------------------- check cap  config page -----------------*/
  function isCapConfiguratorPage() {
    var queryString = getCurrentUrlParams();
    if (validate(queryString, "dNumber")) {
      return true;
    }
    return false;
  }
  /* -------------------------------------------- check category name -----------------*/
  function checkCategory(categoryName) {
    const category = categoryArray.filter((item) => item.name === categoryName);
    if (category.length) {
      return true;
    }
    return false;
  }
  /* -------------------------------------------- API CALL for product item by style id -----------------*/
  async function getCardData(value) {
    try {
      var apiUrl =
        "https://n4nf1c.a.searchspring.io/api/search/autocomplete.json";
      var siteId = "n4nf1c";
      var resultsPerPage = 5;
      var resultsFormat = "native";
      var isSearchEnabled = true;

      var updatedUrl =
        apiUrl +
        "?siteId=" +
        siteId +
        "&q=" +
        value +
        "&resultsPerPage=" +
        resultsPerPage +
        "&resultsFormat=" +
        resultsFormat +
        "&filter.is_search_enabled=" +
        isSearchEnabled;
      const response = await fetch(updatedUrl);
      if (response.ok) {
        const data = await response.json();
        console.log("card item data after api call", data);
        if (data?.results && data.results.length > 0) {
          var productNumber = data?.results[0].product_number;
          var product_category = data?.results[0].product_category;
          var colorImagesHTML = data?.results[0]?.color_images;
          var colorImagesJSON = JSON.parse(htmlEntitiesDecode(colorImagesHTML));
          if (product_category === "Sublimated" && value === productNumber) {
            var partNumber = "CUT" + "_" + value;
            var designLineThumbImage = colorImagesJSON[0].designLineThumbImage;
            var match = designLineThumbImage.match(/S(\d+)_/);
            var extractedImageNumber = match
              ? match[1]
              : colorImagesJSON[1].designLineThumbImage.match(/S(\d+)_/)[1];
            var designLine = colorImagesJSON[0].designLineName.replace(
              /\s/g,
              "%20"
            );
            var product_category = data?.results[0].product_category;
            var iNumber = value + "_" + designLine + "_" + extractedImageNumber;
            return {
              partNumber: partNumber,
              designLine: designLine,
              iNumber: iNumber,
            };
          } else if (product_category == "Stock" && value === productNumber) {
            var capColorCode = colorImagesJSON[0].colorCode;
            return {
              partNumber: value,
              capColorCode: capColorCode,
            };
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      throw error;
      console.log("Card API call error", error);
    }
    function htmlEntitiesDecode(text) {
      var textArea = document.createElement("textarea");
      textArea.innerHTML = text;
      return textArea.value;
    }
  }
  /* -------------------------------------------- generate url by category name and just CapID and not Style Id -----------------*/
  async function generateUrlByNameWithCapId(categoryName, isCategoryName) {
    var currentIframeUrl = document.getElementById("myIframe").src;
    var queryString = getCurrentUrlParams();
    var replaceText = "custom-sublimation";
    if (categoryName) {
      replaceText = "custom-sublimation-" + categoryName;
      var value = queryString["styleId"];
      if (value) {
        if (await isConfiguratorPageByCapId()) {
          replaceText = "CapConfigurator";
          var Index = categoryArray.findIndex(
            (x) => x.name.toLowerCase().trim() === categoryName
          );
          var categoryObj = categoryArray[Index];
          const value = queryString["styleId"];
          const customObject = await getCardData(value);
          for (const key in customObject) {
            if (customObject.hasOwnProperty(key)) {
              categoryObj[key] = customObject[key];
            }
          }
          categoryArray[Index] = categoryObj;
        } else if (await isConfiguratorPageByStyleId()) {
          replaceText = "Configurator";
          var Index = categoryArray.findIndex(
            (x) => x.name.toLowerCase().trim() === categoryName
          );
          var categoryObj = categoryArray[Index];
          const value = queryString["styleId"];
          const customObject = await getCardData(value);
          for (const key in customObject) {
            if (customObject.hasOwnProperty(key)) {
              categoryObj[key] = customObject[key];
            }
          }
          categoryArray[Index] = categoryObj;
        } else {
          replaceText = "custom-sublimation-" + categoryName;
        }
      } else if (isConfiguratorPage()) {
        replaceText = "Configurator";
        categoryName = categoryShareMapper[categoryName];
      } else if (isCapConfiguratorPage()) {
        replaceText = "CapConfigurator";
        categoryName = categoryShareMapper[categoryName];
      } else if (!isCategoryName) {
        replaceText = "SearchDisplayView";
        categoryName = categoryShareMapper[categoryName];
      } else if (
        categoryName === "5-day-turbo" ||
        categoryName === "semi-sublimated"
      ) {
        replaceText = categoryName;
      } else if (!checkCategory(categoryName)) {
        categoryName = "default-page";
        replaceText = "custom-sublimation";
      }
    } else {
      categoryName = "default-page";
      if (await isConfiguratorPageByCapId()) {
        replaceText = "CapConfigurator";
        var Index = categoryArray.findIndex(
          (x) => x.name.toLowerCase().trim() === categoryName
        );
        var categoryObj = categoryArray[Index];
        const value = queryString["styleId"];
        const customObject = await getCardData(value);
        for (const key in customObject) {
          if (customObject.hasOwnProperty(key)) {
            categoryObj[key] = customObject[key];
          }
        }
        categoryArray[Index] = categoryObj;
      } else if (await isConfiguratorPageByStyleId()) {
        replaceText = "Configurator";
        var Index = categoryArray.findIndex(
          (x) => x.name.toLowerCase().trim() === categoryName
        );
        var categoryObj = categoryArray[Index];
        const value = queryString["styleId"];
        const customObject = await getCardData(value);
        for (const key in customObject) {
          if (customObject.hasOwnProperty(key)) {
            categoryObj[key] = customObject[key];
          }
        }
        categoryArray[Index] = categoryObj;
      }
    }
    var Index = categoryArray.findIndex(
      (x) => x.name.toLowerCase().trim() === categoryName
    );
    var categoryObj = categoryArray[Index];
    var url = currentIframeUrl.split("?");
    var urlArray = url[0];
    var paramsArray = url[1];
    var urlHrefArray = urlArray.split("/");
    var urlHrefReplaceEntity = urlHrefArray[urlHrefArray.length - 1];
    url[0] = urlArray.replace(urlHrefReplaceEntity, replaceText);
    var newUrl = url.join("?");
    var href = new URL(newUrl);
    var categoryObjLength = Object.keys(categoryObj).length;
    if (categoryObjLength) {
      Object.keys(categoryObj).forEach(function (key) {
        href.searchParams.delete(key);
        if (key == "tag") {
          value = queryString["tag"];
          href.searchParams.set(key, value);
        } else if (key == "searchTerm") {
          value = queryString["searchTerm"];
          href.searchParams.set(key, value);
        } else {
          href.searchParams.set(key, categoryObj[key]);
        }
      });
    }
    if (isConfiguratorPage() || isCapConfiguratorPage()) {
      Object.keys(queryString).forEach(function (key) {
        href.searchParams.delete(key);
        href.searchParams.set(key, queryString[key]);
      });
    }
    return href.toString();
  }
  /* -------------------------------------------- function scroll view -----------------*/
  function isScrolledIntoView() {
    var elem = document.getElementById("iframediv");
    var docViewTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    var docViewBottom = docViewTop + windowHeight;
    var elemTop = elem.offsetTop;
    var elemBottom = elemTop + elem.offsetHeight;
    return elemBottom <= docViewBottom;
  }

  /* -------------------------------------------- page Load function -----------------*/
  function pageLoad() {
    setIframeSrc();
    window.onscroll = function () {
      if (isScrolledIntoView()) {
        sendDataToChild();
      }
    };
  }
  pageLoad();
  window.onload = function () {
    setTimeout(function () {
    document.getElementById("tile-text-7Qfg6X").insertAdjacentHTML('beforeend',
      '<div id="loaderAlign">' +
        '<div class="loader"></div>' +
      '</div>' +
      '<div id="iframediv" style="display: none; height: 2905px; min-height: 600px">' +
        '<iframe id="myIframe" scrolling="no" height="100%" width="100%" src="https://www.augustasportswear.com/custom-sublimation"></iframe>' +
      '</div>'
    );
  }, 2000);
  };

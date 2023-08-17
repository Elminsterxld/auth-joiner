const puppeteer = require("puppeteer");
const fs = require('fs');
const path = require("path");
const db = require("csy.db");
const express = require("express");
const config = require("./config.js");
const axios = require("axios");
const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();

const chalk = require("chalk");
time = Date.now();


let control = 1

setTimeout(async function () {
  if (control == 1) {
    let buildnumber = (Math.random() + 1).toString(8).substring(13);
    const totaltoken = fs.readFileSync("tokens.txt", "utf-8").split("\r\n").filter(Boolean);
    const totalserver = fs.readFileSync("servers.txt", "utf-8").split("\r\n").filter(Boolean);
    console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Loaded ") + chalk.green(totalserver.length) + chalk.rgb(230, 184, 0)(" Servers ") + chalk.green("[+] "));
    console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Loaded ") + chalk.green(totaltoken.length) + chalk.rgb(230, 184, 0)(" Tokens ") + chalk.green("[+] "));
    console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Status ") + chalk.green("[+] "));
    console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Build Number ") + chalk.green('[' + buildnumber + ']'));
    console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("MS ") + chalk.green('[' + (Date.now() - time) + ']'));
    const BROWSER_CONFIG = {
      'args': ["--no-sandbox", "--disable-setuid-sandbox", "--disable-infobars", "--window-position=0,0", "--window-size=1000,700"],
      'defaultViewport': null,
      'ignoreHTTPSErrors': true,
      'headless': false,
      'executablePath': "C:\\Users\\Administrator\\Desktop\\dosyakonumunuz\\chromium\\chromiumlauncher.exe"
    };
    const wait = _0x4cfd67 => new Promise(_0x58bca7 => {
      setTimeout(() => {
        _0x58bca7();
      }, _0x4cfd67);
    });
    const oauth2 = async (browser, Page, token, {
      now,
      max
    }) => {
      return new Promise(async res => {
        var er = false;
        try {
          var oauth2 = "https://discord.com/api/oauth2/authorize?client_id=" + config.bot.id + "&redirect_uri=" + encodeURIComponent(config.web.url) + "&response_type=code&scope=identify%20guilds.join";
          await Page.bringToFront();
          await Page.goto("https://www.discord.com", {
            'waitUntil': "networkidle0",
            'timeout': 0x11170
          });
          await Page.evaluate("function login(token) {setInterval(() => {document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `\"${token}\"`}, 50);setTimeout(() => {location.reload();}, 2500);}login(\"" + token + "\")");
          let consoletoken = token.slice(3, 15);
          console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)("LOGIN DISCORD TOKEN PROCCES") + chalk.red(" [" + consoletoken + "....]") + chalk.green(" [+]"));
          await Page.goto(oauth2, {
            "waitUntil": "networkidle0",
            timeout: 70000
          });
          await Page.waitForSelector('button[type=button]');
          await Page.evaluate(() => Array.from(document.querySelectorAll('button[type=button]'), async element => {
            if (element.textContent == "Authorize" || element.textContent == "Yetkilendir") {
              await element.click();
            }
          }));
          console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)(`AUTHORIZE PROCESS`) + chalk.green(' [+]'));
          await Page.waitForFunction("document.querySelector(\"body\").innerText.includes(\"success\")", {
            timeout: 180000
          });
          await wait(2000);
          console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)(now + '/' + max + " HAS JOINED THE SERVER, TOKEN WRITTEN TO JOINED FILE") + chalk.green(" [+]"));
          db.set("already_" + token, new Date().getTime());
          res(true);
        } catch (err) {
          fs.writeFile('unjoined.txt', `${token}`, err => {
            if (err) {
              throw err;
            }
            console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)(now + '/' + max + " HAS JOINED ERROR, TOKEN WRITTEN TO UNJOINED FILE") + chalk.red(" [-]"));
          });
          er = true;
        }
        if (er) {
          res(true);
        }
      });
    };
    const start = async (_0x1b97dc, _0x21027b, _0x10e60e) => {
      const _0x2a169c = await puppeteer.launch(BROWSER_CONFIG);
      const _0x2bb912 = (await _0x2a169c.pages())[0];
      await _0x2bb912.goto("http://httpbin.org/ip");
      console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)("IP ADRESS CONTROL") + chalk.green(" [+]"));
      await oauth2(_0x2a169c, _0x2bb912, _0x21027b, _0x10e60e);
      _0x2a169c.close();
    };
    const webstart = async _0x4a29e2 => {
      let _0x2d0194 = express();
      _0x2d0194.all('/', async (_0x286a38, _0x5f371e) => {
        let _0xa98b64 = _0x286a38.query.code;
        if (_0xa98b64) {
          let _0x2d180f = {
            'client_id': config.bot.id,
            'client_secret': config.bot.secret,
            'grant_type': "authorization_code",
            'code': _0xa98b64,
            'redirect_uri': config.web.url
          };
          let _0x193bfb = {
            'Content-Type': "application/x-www-form-urlencoded"
          };
          const _0x553aca = new URLSearchParams(_0x2d180f);
          let _0x3e8734 = await axios.post("https://discord.com/api/oauth2/token", _0x553aca, {
            'headers': _0x193bfb
          })["catch"](_0x126080 => _0x126080 + '1');
          if (_0x3e8734?.["data"] && typeof _0x3e8734?.["data"] == "object") {
            let _0x5efd97 = await axios.get("https://discord.com/api/users/@me", {
              'headers': {
                'Authorization': _0x3e8734?.["data"]?.["token_type"] + " " + _0x19d0f3
              }
            })["catch"](_0x354e74 => _0x354e74 + '1');
            if (_0x5efd97?.["status"] != 401) {
              let _0x4e1f2c = _0x5efd97?.["data"]?.['id'];
              var _0x533d2f = false;
              await oauth.addMember({
                'guildId': _0x4a29e2,
                'botToken': config.bot.token,
                'userId': _0x4e1f2c,
                'accessToken': _0x19d0f3
              })["catch"](_0x2dc63e => {
                _0x2dc63e + '1';
              }).then(_0x40632c => {
                _0x533d2f = true;
              });
              if (_0x533d2f) {
                return _0x5f371e.send("success");
              }
            } else {
              return _0x5f371e.send("error");
            }
          } else {
            return _0x5f371e.send("error");
          }
          return _0x5f371e.send("error");
        } else {
          _0x5f371e.send("nonred");
        }
      });
      _0x2d0194.listen(config.web.port);
    };
    (async () => {
      await console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)("CONNECTING WITH SERVER") + chalk.green(" [+]"));
      var _0x23ed85 = await fs.readFileSync(path.join(__dirname, "/tokens.txt"), "utf-8");
      var _0x31a833 = _0x23ed85.split("\n");
      const _0x69724 = fs.readFileSync("servers.txt", "utf-8").split("\r\n").filter(Boolean);
      let _0x4b9511 = _0x69724[0];
      let _0x5a297e = _0x31a833.length;
      console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)("SCRIPT ONLINE") + chalk.green(" [+]"));
      if (isNaN(_0x5a297e)) {
        return console.log("INVALID NUMBER!");
      }
      if (_0x31a833.length < Number(_0x5a297e)) {
        return console.log("Big a Number!");
      }
      await webstart(_0x4b9511);
      var _0x4af0ad = 0;
      for (var _0x1e2221 = 0; _0x1e2221 < _0x31a833.length; _0x1e2221++) {
        if (_0x4af0ad >= _0x5a297e) {
          break;
        }
        var _0x2e465d = String(_0x31a833[_0x1e2221]).replace(/\r?\n|\r/g, '');
        if (db.has("already_" + _0x2e465d)) {
          console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)(_0x1e2221 + 1 + '/' + _0x31a833.length + " IS ALREADY ON THE SERVER, SWITCHED TO NEXT TOKEN") + chalk.green(" [+]"));
          continue;
        }
        await start(_0x1e2221, _0x2e465d, {
          'now': _0x1e2221 + 1,
          'max': _0x31a833.length
        });
        _0x4af0ad++;
        await wait(3000);
      }
      console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)("ALL TOKENS ARE PROCESSED") + chalk.green(" [+]"));
    })();
  }
}, 2000);
import { c as createServerRpc, a as connectToDatabase } from "./mongodb-Dpb8GD2P.mjs";
import { c as createServerFn } from "./server-DvjeT0Do.mjs";
import { l as libExports } from "../_libs/mongodb.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "crypto";
import "../_libs/isbot.mjs";
import "timers/promises";
import "timers";
import "fs";
import "http";
import "process";
import "events";
import "dns";
import "url";
import "zlib";
import "net";
import "fs/promises";
import "tls";
import "child_process";
import "../_libs/bson.mjs";
import "../_libs/mongodb-connection-string-url.mjs";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "../_libs/tr46.mjs";
import "../_libs/punycode.mjs";
import "../_libs/mongodb-js__saslprep.mjs";
import "../_libs/sparse-bitfield.mjs";
import "../_libs/memory-pager.mjs";
const googleLoginFn_createServerFn_handler = createServerRpc({
  id: "f846724138f9143added61f52929b69ba86d76f84522579c79b65c0c4bfffe4b",
  name: "googleLoginFn",
  filename: "src/functions/googleAuth.ts"
}, (opts) => googleLoginFn.__executeServer(opts));
const googleLoginFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(googleLoginFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = data.redirectUri;
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        code: data.code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code"
      })
    });
    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      throw new Error(errorData.error_description || "Failed to exchange code for token");
    }
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!userInfoResponse.ok) {
      throw new Error("Failed to get user info from Google");
    }
    const googleUser = await userInfoResponse.json();
    const {
      email,
      name,
      id: googleId
    } = googleUser;
    const db = await connectToDatabase();
    let user = await db.collection("users").findOne({
      email
    });
    let isNewUser = false;
    if (!user) {
      isNewUser = true;
      const newUser = {
        email,
        name,
        googleId,
        password: null,
        // No password for Google users
        role: email.toLowerCase().startsWith("admin@") ? "admin" : "user",
        createdAt: /* @__PURE__ */ new Date(),
        cart: [],
        wishlist: []
      };
      const result = await db.collection("users").insertOne(newUser);
      user = {
        ...newUser,
        _id: result.insertedId
      };
    } else if (!user.googleId) {
      await db.collection("users").updateOne({
        _id: user._id
      }, {
        $set: {
          googleId
        }
      });
    }
    const userId = user._id instanceof libExports.ObjectId ? user._id.toString() : user._id;
    const token = btoa(`${userId}:${Date.now()}`);
    return {
      user: {
        id: userId,
        email: user.email,
        name: user.name,
        role: user.role || "user"
      },
      token,
      isNewUser
    };
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
});
export {
  googleLoginFn_createServerFn_handler
};

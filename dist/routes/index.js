"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_1 = require("../contoller/profile");
const router = (0, express_1.Router)();
router.get('/api', profile_1.getProfileDetails);
exports.default = router;

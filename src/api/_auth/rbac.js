const { verifySession } = require("supertokens-node/recipe/session/framework/express");
const UserRoles = require("supertokens-node/recipe/userroles");

module.exports.auth = (toCheck) => verifySession({
    overrideGlobalClaimValidators: async (globalValidators) => [
        ...globalValidators,
        UserRoles.UserRoleClaim.validators.includes(toCheck)
    ]
})
// const { promisify } = require('util');
// const exec = promisify(require('child_process').exec)

const process = require("child_process");
const cmd = process.



module.exports.aws_compliance_audit_manager_control_tower = async(req,res) => {
    try {
        // const nameOutput = await exec('git config --global user.name')
        // const emailOutput = await exec('git config --global user.email')
        const nameOutput = await exec('ls')
        return { 
            name: nameOutput.stdout.trim(), 
            // email: emailOutput.stdout.trim()
        }
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}
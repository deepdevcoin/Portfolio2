const https = require("https")
const fs = require("fs")
const path = require("path")

// List of logos and their original SVG filenames from devicon repo
const logos = [
  "react-original.svg",
  "nextjs-original.svg",
  "typescript-original.svg",
  "tailwindcss-original.svg",
  "redux-original.svg",
  "nodejs-original.svg",
  "express-original.svg",
  "python-original.svg",
  "fastapi-original.svg",
  "postgresql-original.svg",
  "mongodb-original.svg",
  "supabase-original.svg",
  "redis-original.svg",
  "docker-original.svg",
  "kubernetes-original.svg",
  "git-original.svg",
  "linux-original.svg",
  "tensorflow-original.svg",
  "pytorch-original.svg",
  "scikitlearn-original.svg",
  "pandas-original.svg",
  "numpy-original.svg",
]

const baseUrl = "https://raw.githubusercontent.com/devicons/devicon/master/icons"

const downloadFolder = path.join(__dirname, "public", "skills")

if (!fs.existsSync(downloadFolder)) {
  fs.mkdirSync(downloadFolder, { recursive: true })
}

function downloadLogo(logo) {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}/${logo.replace(/-original.svg$/, "")}/${logo}`
    const dest = path.join(downloadFolder, logo)

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get ${url} (${res.statusCode})`))
      }
      const fileStream = fs.createWriteStream(dest)
      res.pipe(fileStream)
      fileStream.on("finish", () => {
        fileStream.close()
        console.log(`Downloaded: ${logo}`)
        resolve()
      })
    }).on("error", reject)
  })
}

async function main() {
  for (const logo of logos) {
    try {
      await downloadLogo(logo)
    } catch (err) {
      console.error(`Error downloading ${logo}: ${err.message}`)
    }
  }
  console.log("All downloads completed.")
}

main()

import Download from "../models/download.js";

export const createDownload = async (req, res) => {
  try {
    // Trouve le document de téléchargement dans la base de données
    const download = await Download.findOne();
    if (!download) {
      // Si le document n'existe pas, en crée un nouveau
      const newDownload = new Download({ count: 1 });
      await newDownload.save();
    } else {
      // Sinon, incrémente le nombre de téléchargements
      download.count += 1;
      await download.save();
    }
    res.status(201).json({ message: "Download recorded" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getDownloadCount = async (req, res) => {
  try {
    const download = await Download.findOne();
    res.status(200).json({ count: download ? download.count : 0 });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const handleDownloadRequest = async (req, res) => {
  try {
    // Traiter la requête POST ici
    res.status(201).json({ message: "Download recorded" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
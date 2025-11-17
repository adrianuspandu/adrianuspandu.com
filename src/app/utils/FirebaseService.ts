import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export class FirebaseService {
  public static shared: FirebaseService | null = new FirebaseService();

  private firebaseConfig: FirebaseConfig;
  private app: FirebaseApp;
  private storage: FirebaseStorage;

  private constructor() {
    this.configureFirebase();
    this.app = initializeApp(this.firebaseConfig);
    this.storage = getStorage(
      this.app,
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
    );
  }

  private configureFirebase() {
    this.firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };
  }

  private async getImageURL(filePath: string): Promise<string | null> {
    try {
      const pathReference = ref(FirebaseService.shared.storage, filePath);
      const url = await getDownloadURL(pathReference);
      return url;
    } catch (error) {
      console.error("error fetching file URL", error);
      return null;
    }
  }

  private async listImages(folderPath = "images/"): Promise<string[]> {
    try {
      const folderRef = ref(FirebaseService.shared.storage, folderPath);
      const result = await listAll(folderRef);
      const fileURLs = await Promise.all(
        result.items.map((item) => getDownloadURL(item))
      );
      return fileURLs;
    } catch (error) {
      console.error("error listing files:", error);
      return [];
    }
  }
}

import { useState } from "react";
import Image from "next/image";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";

export default function UserProfile() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const [firstName, setFirstName] = useState<string>("Dilky");
  const [lastName, setLastName] = useState<string>("Chamika");
  const [email] = useState<string>("dilky@123.com");
  const [role] = useState<string>("Admin");
  const [profilePicture, setProfilePicture] = useState<string>(
    "/images/user-logo.png"
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setProfilePicture(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex flex-col items-center justify-center">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
      <div className="bg-white text-black rounded-t-lg shadow-lg w-full max-w-4xl">
        <div className="text-center p-8">
          <div className="relative mx-auto w-24 h-24">
            <Image
              src={profilePicture}
              alt="User Logo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleProfilePictureChange}
              />
            )}
          </div>
          <h1 className="text-3xl font-bold mt-4">{`${firstName} ${lastName}`}</h1>
        </div>
        <div className="bg-gray-100 p-6">
          {isEditing ? (
            <div className="grid grid-cols-2 gap-4 text-lg mb-6">
              <div>
                <label className="block font-semibold">First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 rounded border-2 border-gray-300 text-black"
                />
              </div>
              <div>
                <label className="block font-semibold">Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 rounded border-2 border-gray-300 text-black"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 text-lg mb-6">
              <div>
                <p>
                  <span className="font-semibold">First Name :</span>{" "}
                  {firstName}
                </p>
                <p>
                  <span className="font-semibold">Email :</span> {email}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Last Name :</span> {lastName}
                </p>
                <p>
                  <span className="font-semibold">Role :</span> {role}
                </p>
              </div>
            </div>
          )}
          <div className="text-center">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            ) : (
              <>
                <a
                  href="#"
                  onClick={() => setIsEditing(true)}
                  className="text-blue-600 hover:underline block mb-2"
                >
                  Change Profile
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Change Password
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <footer className="w-full text-center text-white text-sm py-4 mt-8">
        © Copyright 2024, All Rights Reserved by LECSPACE
      </footer>
    </div>
  );
}

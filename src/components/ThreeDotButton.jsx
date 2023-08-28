import axios from "axios";
import React, { useState } from "react";
import Icon from "@mdi/react";

import { mdiDotsVertical } from '@mdi/js';
const ThreeDotButton = ({ onChangeEdit,items, userIdApp0, comment, Recipe }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleItemClick =  async(url) => {
    if (url === "delete") {
      const updatedComments = Recipe.comments.filter(
        (comment1) => comment1.comment !== comment.comment
      );

   try {
    const updatedRecipe = {
        comments: updatedComments,
      };
      const response = await axios.put(
        `http://localhost:5000/api/updateRecipeComment/${Recipe._id}`,
        updatedRecipe
      );
      onChangeEdit(updatedComments)
   } catch (error) {
    console.error(error.message);
   }



      console.log("Updated comments:", updatedComments);
    }
  };

  return (
    <div className="relative inline-block">
      <button type="button" className="p-2" onClick={toggleList}>
      <Icon path={mdiDotsVertical} size={1} />

      </button>
      {isListOpen && (
        <div className="origin-top-right absolute z-40 right-0 mt-2 w-20">
          <div className="bg-white border rounded-md shadow-lg">
            <ul>
              {comment.userId === userIdApp0 ? (
                <>
                  <li>
                    <button
                      onClick={() => handleItemClick("delete")}
                      className="block w-full px-4  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Delete
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleItemClick("report")}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Report
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => handleItemClick("report")}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Report
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDotButton;

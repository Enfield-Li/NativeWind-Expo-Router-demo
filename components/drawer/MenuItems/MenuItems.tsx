import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Fragment, useState } from "react";
import { produce } from "immer";
import Icon from "react-native-vector-icons/Feather";
import Dashboards from "../subMenus/Dashboards";
import Docs from "../subMenus/Docs";
import Favorites from "../subMenus/Favorites";
import Spaces from "../subMenus/Spaces";

type Props = {};
type MenuItem = { name: string; isOpen: boolean };

function MenuItems(props: Props) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { name: "Favorites", isOpen: true },
    { name: "Spaces", isOpen: false },
    { name: "Dashboards", isOpen: false },
    { name: "Docs", isOpen: false },
  ]);

  function onSelectMenuItem(name: string) {
    setMenuItems(
      produce(menuItems, (draftState) => {
        draftState.forEach(
          (menuItem) =>
            menuItem.name === name && (menuItem.isOpen = !menuItem.isOpen)
        );
      })
    );
  }

  return (
    <View className="mt-1">
      {menuItems.map((menuItem, index) => (
        <Fragment key={index}>
          <TouchableOpacity
            onPress={() => onSelectMenuItem(menuItem.name)}
            className={`${
              menuItem.isOpen && "bg-gray-300"
            } p-3 flex-row justify-between items-center px-4 border-t border-slate-300`}
          >
            <Text className="text-gray-600">{menuItem.name}</Text>

            {menuItem.isOpen ? (
              <View className="flex-row items-center">
                {menuItem.name === "Spaces" && (
                  <View className="flex-row items-center">
                    <TouchableOpacity className="mr-2">
                      <Icon size={18} color="blue" name="search" />
                    </TouchableOpacity>
                    <TouchableOpacity className="mr-2">
                      <Icon size={20} name="plus" color="blue" />
                    </TouchableOpacity>
                  </View>
                )}
                <Icon size={20} name="chevron-down" color="blue" />
              </View>
            ) : (
              <Icon size={20} name="chevron-right" color="gray" />
            )}
          </TouchableOpacity>

          {menuItem.isOpen && (
            <View className="px-5 py-2">
              {menuItem.name === "Favorites" ? (
                <Favorites />
              ) : menuItem.name === "Spaces" ? (
                <Spaces />
              ) : menuItem.name === "Dashboards" ? (
                <Dashboards />
              ) : (
                <Docs />
              )}
            </View>
          )}
        </Fragment>
      ))}
    </View>
  );
}

export default MenuItems;

const styles = StyleSheet.create({});

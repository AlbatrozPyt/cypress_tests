import { useEffect, useState } from "react";
import { CheckMusic, LikeMusic, DeslikeMusic } from "../../utils/LikeAndDeslike";

// Importando as ferramentas
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// Importando os estilos
import { CardAlbum, CardMusic } from "./styles"

// Importando os components
import { ButtonLike } from "../Button/styles";
import { ImageAlbum, ImageMusic } from "../Image/styles";
import { Paragraph, SubParagraph } from "../Text/Paragraph/styles";
import { ContainerMusic, ContainerSound } from "../Container/styles";

export const Album = ({ image, name, description, onPress, label, labelButton }) => {
  return (
    <CardAlbum accessibilityLabel={label} onPress={onPress}>
      <ImageAlbum
        source={{ uri: image }}
      />

      <Paragraph >{name}</Paragraph>

      <SubParagraph>{description}</SubParagraph>
    </CardAlbum>
  )
}

export const Music = ({ image, name, artist, play = false, isLike = false, like, onPress, label }) => {
  const [isLiked, setIsLiked] = useState(isLike);

  // Função para curtir e descurtir a música
  async function handleLike() {
    if (isLiked) {
      await DeslikeMusic(like);
      setIsLiked(false);

    } else {
      await LikeMusic(like);
      setIsLiked(true);
    }
  }

  return (
    <CardMusic onPress={onPress} accessibilityLabel={label}>
      <ContainerSound>
        <ImageMusic
          playSound={play}
          source={{ uri: image }}
        />

        {
          play && <MaterialIcons name="pause" size={24} color="#fbfbfb" style={{ position: 'absolute' }} />
        }
      </ContainerSound>

      <ContainerMusic>
        <Paragraph>{name}</Paragraph>

        <SubParagraph>{artist}</SubParagraph>
      </ContainerMusic>

      {like && (
        <ButtonLike testID="icon-button" onPress={() => handleLike()}>
          {
            isLiked
              ? <FontAwesome accessibilityLabel="icon-like" name="heart" size={18} color="#FF0000" />
              : <FontAwesome accessibilityLabel="icon-deslike" name="heart-o" size={18} color="#1ED760" />
          }
        </ButtonLike>
      )}

    </CardMusic>
  )
}
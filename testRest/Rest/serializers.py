from rest_framework import serializers

from .models import Sample


class SampleListSerializers(serializers.ModelSerializer):
    """Список проб"""
    #month = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = Sample
        fields = "__all__"


class SampleCreateSerializers(serializers.ModelSerializer):
    """Добавление образца"""
    
    #user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Sample
        fields = "__all__"
